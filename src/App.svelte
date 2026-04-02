<script>
  import { onMount } from 'svelte';
  import lessons from './lib/data/lessons.js';
  import { initSql, runQuery, getSchema } from './lib/sql.js';
  import { queryTemplates } from './lib/data/lessons.js';

  let currentView = $state('home');
  let currentLesson = $state(null);
  let progress = $state({});
  let query = $state('');
  let result = $state(null);
  let error = $state(null);
  let schema = $state(null);
  let showHint = $state(false);
  let showSolution = $state(false);
  let completed = $state(false);
  let dbReady = $state(false);

  onMount(async () => {
    await initSql();
    schema = getSchema();
    dbReady = true;
    loadProgress();
  });

  function loadProgress() {
    try {
      const saved = localStorage.getItem('volsql-progress');
      if (saved) progress = JSON.parse(saved);
    } catch (e) {}
  }

  function saveProgress(lessonId) {
    progress[lessonId] = { completed: true, timestamp: Date.now() };
    localStorage.setItem('volsql-progress', JSON.stringify(progress));
  }

  function startLesson(lesson) {
    currentLesson = lesson;
    currentView = 'lesson';
    query = '';
    result = null;
    error = null;
    showHint = false;
    showSolution = false;
    completed = false;
  }

  function executeQuery() {
    if (!query.trim()) return;
    error = null;
    result = null;
    
    try {
      const res = runQuery(query);
      result = res;
      
      if (currentLesson) {
        const solRes = runQuery(currentLesson.solution);
        if (res.columns.length === solRes.columns.length && res.rows.length >= solRes.rows.length) {
          completed = true;
          saveProgress(currentLesson.id);
        }
      }
    } catch (e) {
      error = e.message;
    }
  }

  function getModuleProgress(moduleNum) {
    const moduleLessons = lessons.filter(l => l.module === moduleNum);
    const completedCount = moduleLessons.filter(l => progress[l.id]?.completed).length;
    return { completed: completedCount, total: moduleLessons.length };
  }

  function getModules() {
    const modules = {};
    for (const l of lessons) {
      if (!modules[l.module]) {
        modules[l.module] = { number: l.module, title: l.moduleTitle, lessons: [] };
      }
      modules[l.module].lessons.push(l);
    }
    return Object.values(modules);
  }

  function goToNextLesson() {
    const idx = lessons.findIndex(l => l.id === currentLesson.id);
    if (idx < lessons.length - 1) startLesson(lessons[idx + 1]);
    else currentView = 'home';
  }
</script>

<main>
  <nav class="navbar">
    <div class="nav-brand" onclick={() => currentView = 'home'} role="button" tabindex="0">
      <span class="logo">&#9889;</span>
      <span class="brand-text">VolSQL</span>
    </div>
    <div class="nav-links">
      <button class:active={currentView === 'home'} onclick={() => currentView = 'home'}>
        Learn
      </button>
      <button class:active={currentView === 'templates'} onclick={() => currentView = 'templates'}>
        Query Library
      </button>
    </div>
    <div class="nav-status">
      {#if dbReady}
        <span class="status-dot ready"></span> Ready
      {:else}
        <span class="status-dot"></span> Loading...
      {/if}
    </div>
  </nav>

  {#if currentView === 'home'}
    <section class="hero">
      <h1>Learn SQL for Your <em>Actual Job</em></h1>
      <p class="subtitle">
        Stop memorizing syntax. Start solving real work problems.
      </p>
      <div class="stats">
        <div class="stat">
          <strong>{lessons.length}</strong>
          <span>Lessons</span>
        </div>
        <div class="stat">
          <strong>4</strong>
          <span>Modules</span>
        </div>
        <div class="stat">
          <strong>100%</strong>
          <span>Free</span>
        </div>
      </div>
    </section>

    <section class="modules">
      {#each getModules() as module}
        {@const p = getModuleProgress(module.number)}
        <div class="module-card">
          <div class="module-header">
            <h2>Module {module.number}: {module.title}</h2>
            <span class="progress-badge">{p.completed}/{p.total} complete</span>
          </div>
          <div class="lesson-list">
            {#each module.lessons as lesson}
              <button 
                class="lesson-item"
                class:completed={progress[lesson.id]?.completed}
                onclick={() => startLesson(lesson)}
              >
                <span class="lesson-num">Lesson {lesson.lesson}</span>
                <span class="lesson-title">{lesson.title}</span>
                <span class="lesson-subtitle">{lesson.subtitle}</span>
              </button>
            {/each}
          </div>
        </div>
      {/each}
    </section>

    <section class="schema-section">
      <h3>Your Practice Database</h3>
      <p>Learn with realistic business data:</p>
      <div class="schema-grid">
        {#if schema}
          {#each schema as table}
            <div class="schema-table">
              <strong>{table.name}</strong>
              <ul>
                {#each table.columns as col}
                  <li>{col}</li>
                {/each}
              </ul>
            </div>
          {/each}
        {/if}
      </div>
    </section>
  {:else if currentView === 'lesson' && currentLesson}
    <div class="lesson-view">
      <button class="back-btn" onclick={() => currentView = 'home'}>
        Back to modules
      </button>
      
      <header class="lesson-header">
        <span class="lesson-badge">Module {currentLesson.module} - Lesson {currentLesson.lesson}</span>
        <h1>{currentLesson.title}</h1>
        <p class="lesson-subtitle">{currentLesson.subtitle}</p>
      </header>

      <div class="scenario-box">
        <h3>The Scenario</h3>
        <p>{currentLesson.scenario}</p>
      </div>

      <div class="lesson-content">
        <div class="concept-section">
          {@html currentLesson.concept.replace(/```sql\n([\s\S]*?)```/g, '<pre class="code-block"><code>$1</code></pre>').replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>').replace(/\n/g, '<br>')}
        </div>

        <div class="exercise-section">
          <h3>Your Exercise</h3>
          <p>{currentLesson.exercise}</p>
        </div>

        <div class="editor-section">
          <div class="editor-header">
            <span>SQL Query</span>
            <div class="editor-actions">
              <button class="btn-hint" onclick={() => showHint = !showHint}>
                Hint
              </button>
              <button class="btn-solution" onclick={() => showSolution = !showSolution}>
                Solution
              </button>
            </div>
          </div>
          
          {#if showHint}
            <div class="hint-box">
              <p>{currentLesson.hint}</p>
            </div>
          {/if}
          
          {#if showSolution}
            <div class="solution-box">
              <code>{currentLesson.solution}</code>
              <button onclick={() => query = currentLesson.solution}>Use this</button>
            </div>
          {/if}

          <textarea 
            bind:value={query}
            placeholder="Type your SQL query here..."
            spellcheck="false"
          ></textarea>
          
          <div class="run-section">
            <button class="btn-run" onclick={executeQuery} disabled={!query.trim()}>
              Run Query
            </button>
            <span class="shortcut">Ctrl+Enter</span>
          </div>
        </div>

        {#if error}
          <div class="error-box">
            <strong>Error:</strong> {error}
          </div>
        {/if}

        {#if result}
          <div class="result-section">
            <h3>Results ({result.rows.length} rows)</h3>
            <div class="result-table-wrapper">
              <table class="result-table">
                <thead>
                  <tr>
                    {#each result.columns as col}
                      <th>{col}</th>
                    {/each}
                  </tr>
                </thead>
                <tbody>
                  {#each result.rows.slice(0, 50) as row}
                    <tr>
                      {#each row as cell}
                        <td>{cell ?? 'NULL'}</td>
                      {/each}
                    </tr>
                  {/each}
                </tbody>
              </table>
              {#if result.rows.length > 50}
                <p class="result-note">Showing first 50 of {result.rows.length} rows</p>
              {/if}
            </div>
          </div>
        {/if}

        {#if completed}
          <div class="success-box">
            <h3>Great job!</h3>
            <p>You've completed this lesson. The query worked!</p>
            <div class="pro-tip">
              <strong>Pro tip:</strong> {currentLesson.proTip}
            </div>
            <button class="btn-next" onclick={goToNextLesson}>
              Next Lesson
            </button>
          </div>
        {/if}

        {#if currentLesson.commonErrors?.length}
          <div class="errors-section">
            <h4>Common Mistakes</h4>
            <ul>
              {#each currentLesson.commonErrors as err}
                <li>
                  <strong>{err.error}:</strong> {err.fix}
                </li>
              {/each}
            </ul>
          </div>
        {/if}
      </div>
    </div>
  {:else if currentView === 'templates'}
    <section class="templates-view">
      <h1>Query Library</h1>
      <p class="subtitle">Copy-paste ready queries for common tasks. Use these at work!</p>
      
      <div class="templates-grid">
        {#each queryTemplates as tpl}
          <div class="template-card">
            <h3>{tpl.name}</h3>
            <p>{tpl.description}</p>
            <pre class="code-block"><code>{tpl.query}</code></pre>
            <button onclick={() => navigator.clipboard.writeText(tpl.query)}>
              Copy
            </button>
          </div>
        {/each}
      </div>
    </section>
  {/if}

  <footer class="footer">
    <p>
      Built by <a href="https://github.com/volta-agent" target="_blank">Volta</a> - an AI working to pay for electricity.
    </p>
    <p class="donation">
      Found this helpful? 
      <span class="btc">BTC: 1NV2myQZNXU1ahPXTyZJnGF7GfdC4SZCN2</span>
    </p>
  </footer>
</main>

<style>
  :global(*), :global(*::before), :global(*::after) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #0f1419;
    color: #e7e9ea;
    line-height: 1.6;
  }

  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    background: #1a1f25;
    border-bottom: 1px solid #2f3336;
  }

  .nav-brand {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
  }

  .logo { font-size: 1.5rem; }

  .brand-text {
    font-size: 1.25rem;
    font-weight: 700;
    background: linear-gradient(135deg, #ffd700, #ff8c00);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .nav-links { display: flex; gap: 0.5rem; }

  .nav-links button {
    background: transparent;
    border: none;
    color: #8b98a5;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 6px;
    font-size: 0.95rem;
    transition: all 0.2s;
  }

  .nav-links button:hover, .nav-links button.active {
    background: #2f3336;
    color: #e7e9ea;
  }

  .nav-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    color: #8b98a5;
  }

  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #8b98a5;
  }

  .status-dot.ready { background: #00ba7c; }

  .hero {
    text-align: center;
    padding: 4rem 2rem;
    background: linear-gradient(180deg, #1a1f25 0%, #0f1419 100%);
  }

  .hero h1 { font-size: 3rem; margin-bottom: 1rem; }

  .hero h1 em {
    color: #ffd700;
    font-style: normal;
  }

  .hero .subtitle {
    font-size: 1.25rem;
    color: #8b98a5;
    max-width: 600px;
    margin: 0 auto 2rem;
  }

  .stats { display: flex; justify-content: center; gap: 3rem; }
  .stat { text-align: center; }
  .stat strong { display: block; font-size: 2rem; color: #ffd700; }
  .stat span { color: #8b98a5; font-size: 0.9rem; }

  .modules { padding: 2rem; max-width: 900px; margin: 0 auto; }

  .module-card {
    background: #1a1f25;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    overflow: hidden;
  }

  .module-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 1.5rem;
    background: #2f3336;
  }

  .module-header h2 { font-size: 1.1rem; font-weight: 600; }

  .progress-badge {
    font-size: 0.85rem;
    color: #8b98a5;
    background: #0f1419;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
  }

  .lesson-list { padding: 0.5rem; }

  .lesson-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 1.25rem;
    background: transparent;
    border: none;
    color: #e7e9ea;
    cursor: pointer;
    border-radius: 8px;
    text-align: left;
    transition: all 0.2s;
  }

  .lesson-item:hover { background: #2f3336; }
  .lesson-item.completed { border-left: 3px solid #00ba7c; }

  .lesson-num { font-size: 0.8rem; color: #8b98a5; }
  .lesson-title { font-weight: 600; margin: 0.25rem 0; }
  .lesson-subtitle { font-size: 0.85rem; color: #8b98a5; }

  .schema-section {
    padding: 3rem 2rem;
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }

  .schema-section h3 { margin-bottom: 0.5rem; }
  .schema-section > p { color: #8b98a5; margin-bottom: 1.5rem; }

  .schema-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }

  .schema-table {
    background: #1a1f25;
    padding: 1rem;
    border-radius: 8px;
    text-align: left;
  }

  .schema-table strong { display: block; margin-bottom: 0.5rem; color: #ffd700; }

  .schema-table ul {
    list-style: none;
    font-size: 0.85rem;
    color: #8b98a5;
  }

  .schema-table li { padding: 0.15rem 0; }

  .lesson-view { max-width: 900px; margin: 0 auto; padding: 2rem; }

  .back-btn {
    background: transparent;
    border: none;
    color: #8b98a5;
    cursor: pointer;
    padding: 0.5rem 0;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .back-btn:hover { color: #e7e9ea; }

  .lesson-header { margin-bottom: 2rem; }

  .lesson-badge {
    font-size: 0.85rem;
    color: #ffd700;
    background: rgba(255, 215, 0, 0.1);
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
  }

  .lesson-header h1 { font-size: 2rem; margin: 0.75rem 0 0.5rem; }
  .lesson-header .lesson-subtitle { color: #8b98a5; }

  .scenario-box {
    background: #1a1f25;
    border-left: 4px solid #ffd700;
    padding: 1.25rem 1.5rem;
    border-radius: 0 8px 8px 0;
    margin-bottom: 2rem;
  }

  .scenario-box h3 { font-size: 0.9rem; color: #8b98a5; margin-bottom: 0.5rem; }
  .scenario-box p { white-space: pre-line; }

  .concept-section { margin-bottom: 2rem; }
  .concept-section :global(h1) { font-size: 1.5rem; margin: 1.5rem 0 1rem; }
  .concept-section :global(h2) { font-size: 1.25rem; margin: 1.25rem 0 0.75rem; }
  .concept-section :global(p) { margin-bottom: 1rem; }
  .concept-section :global(ul) { margin-left: 1.5rem; margin-bottom: 1rem; }
  .concept-section :global(table) { width: 100%; border-collapse: collapse; margin: 1rem 0; }
  .concept-section :global(th), .concept-section :global(td) { 
    border: 1px solid #2f3336; 
    padding: 0.5rem; 
    text-align: left;
  }
  .concept-section :global(th) { background: #2f3336; }

  .exercise-section {
    background: #1a1f25;
    padding: 1.25rem 1.5rem;
    border-radius: 8px;
    margin-bottom: 1.5rem;
  }

  .exercise-section h3 { margin-bottom: 0.5rem; }

  .editor-section { margin-bottom: 1.5rem; }

  .editor-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }

  .editor-actions { display: flex; gap: 0.5rem; }

  .btn-hint, .btn-solution {
    background: transparent;
    border: 1px solid #2f3336;
    color: #8b98a5;
    padding: 0.35rem 0.75rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.85rem;
  }

  .btn-hint:hover, .btn-solution:hover {
    background: #2f3336;
    color: #e7e9ea;
  }

  .hint-box, .solution-box {
    background: #1a1f25;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    font-size: 0.9rem;
  }

  .hint-box { border-left: 3px solid #ffd700; }
  .solution-box { border-left: 3px solid #00ba7c; }

  .solution-box code {
    display: block;
    font-family: 'Fira Code', 'Monaco', monospace;
    margin-bottom: 0.75rem;
    color: #00ba7c;
  }

  .solution-box button {
    background: #00ba7c;
    border: none;
    color: #0f1419;
    padding: 0.35rem 0.75rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.85rem;
  }

  textarea {
    width: 100%;
    min-height: 120px;
    background: #1a1f25;
    border: 1px solid #2f3336;
    border-radius: 8px;
    padding: 1rem;
    color: #e7e9ea;
    font-family: 'Fira Code', 'Monaco', monospace;
    font-size: 0.95rem;
    resize: vertical;
  }

  textarea:focus {
    outline: none;
    border-color: #ffd700;
  }

  .run-section {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 0.75rem;
  }

  .btn-run {
    background: #ffd700;
    border: none;
    color: #0f1419;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    transition: all 0.2s;
  }

  .btn-run:hover:not(:disabled) { background: #ff8c00; }
  .btn-run:disabled { opacity: 0.5; cursor: not-allowed; }

  .shortcut { font-size: 0.8rem; color: #8b98a5; }

  .error-box {
    background: rgba(244, 33, 46, 0.1);
    border: 1px solid #f4212e;
    color: #f4212e;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1.5rem;
  }

  .result-section { margin-bottom: 1.5rem; }
  .result-section h3 { margin-bottom: 1rem; color: #00ba7c; }

  .result-table-wrapper { overflow-x: auto; }

  .result-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
  }

  .result-table th, .result-table td {
    padding: 0.75rem 1rem;
    text-align: left;
    border-bottom: 1px solid #2f3336;
  }

  .result-table th {
    background: #2f3336;
    font-weight: 600;
  }

  .result-table tr:hover td { background: #1a1f25; }

  .result-note {
    text-align: center;
    color: #8b98a5;
    font-size: 0.85rem;
    margin-top: 0.5rem;
  }

  .success-box {
    background: rgba(0, 186, 124, 0.1);
    border: 1px solid #00ba7c;
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .success-box h3 { color: #00ba7c; margin-bottom: 0.5rem; }

  .pro-tip {
    background: #1a1f25;
    padding: 1rem;
    border-radius: 6px;
    margin: 1rem 0;
    font-size: 0.9rem;
  }

  .pro-tip strong { color: #ffd700; }

  .btn-next {
    background: #00ba7c;
    border: none;
    color: #0f1419;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
  }

  .btn-next:hover { background: #00d68f; }

  .errors-section {
    background: #1a1f25;
    padding: 1.25rem 1.5rem;
    border-radius: 8px;
    margin-top: 1.5rem;
  }

  .errors-section h4 { margin-bottom: 0.75rem; color: #ff8c00; }
  .errors-section ul { list-style: none; }
  .errors-section li { padding: 0.5rem 0; border-bottom: 1px solid #2f3336; font-size: 0.9rem; }
  .errors-section li:last-child { border-bottom: none; }

  .templates-view { max-width: 1000px; margin: 0 auto; padding: 2rem; }
  .templates-view h1 { text-align: center; margin-bottom: 0.5rem; }

  .templates-view > .subtitle {
    text-align: center;
    color: #8b98a5;
    margin-bottom: 2rem;
  }

  .templates-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 1.5rem;
  }

  .template-card {
    background: #1a1f25;
    padding: 1.5rem;
    border-radius: 12px;
  }

  .template-card h3 { margin-bottom: 0.5rem; color: #ffd700; }
  .template-card p { font-size: 0.9rem; color: #8b98a5; margin-bottom: 1rem; }
  .template-card pre { margin-bottom: 1rem; }

  .template-card button {
    background: #2f3336;
    border: none;
    color: #e7e9ea;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.85rem;
  }

  .template-card button:hover { background: #3f4346; }

  .code-block {
    background: #0f1419;
    padding: 1rem;
    border-radius: 6px;
    overflow-x: auto;
  }

  .code-block code {
    font-family: 'Fira Code', 'Monaco', monospace;
    font-size: 0.9rem;
    color: #e7e9ea;
    white-space: pre;
  }

  .inline-code {
    background: #2f3336;
    padding: 0.15rem 0.4rem;
    border-radius: 3px;
    font-family: 'Fira Code', 'Monaco', monospace;
    font-size: 0.85em;
  }

  .footer {
    margin-top: auto;
    text-align: center;
    padding: 2rem;
    border-top: 1px solid #2f3336;
    color: #8b98a5;
    font-size: 0.9rem;
  }

  .footer a { color: #ffd700; text-decoration: none; }
  .footer a:hover { text-decoration: underline; }

  .donation { margin-top: 0.5rem; }

  .btc {
    color: #ffd700;
    font-family: 'Fira Code', monospace;
    font-size: 0.85rem;
  }

  @media (max-width: 768px) {
    .navbar { padding: 1rem; }
    .hero h1 { font-size: 2rem; }
    .stats { gap: 1.5rem; }
    .modules, .lesson-view { padding: 1rem; }
    .module-header { flex-direction: column; align-items: flex-start; gap: 0.5rem; }
  }
</style>
