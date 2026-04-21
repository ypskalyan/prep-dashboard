export const PHASES = [
  {
    id: 'p1', num: '01', label: 'Phase 1', weeks: 'Weeks 1–3',
    color: '#FF6B6B', bg: '#FFF0F0',
    title: 'React — from Copilot user to concept owner',
    intro: 'You used React daily for 1.5 years but through Copilot. This phase builds the mental model so you can debug, design, and discuss it confidently.',
    topics: [
      { id: 'p1t1', title: 'React core mental model', tag: 'gap', subs: ['Virtual DOM — what it is, why it exists, reconciliation', 'Component lifecycle: mount, update, unmount conceptually', 'Why unidirectional data flow matters', 'Props vs state — what each actually represents', 'Controlled vs uncontrolled components'] },
      { id: 'p1t2', title: 'Hooks — the real why', tag: 'gap', subs: ['useState — batching, closure traps, stale state', 'useEffect — dependency array logic, cleanup', 'useCallback / useMemo — when to use and when NOT to', 'useRef — difference from state', 'Custom hooks — the pattern and when to extract'] },
      { id: 'p1t3', title: 'State management patterns', tag: 'resume', subs: ['Local vs global state — when to lift state up', 'Context API — use case, re-render problem, limits', 'Redux mental model — actions, reducers, store', 'Zustand / Jotai — why they exist over Redux', 'Server state vs client state distinction'] },
      { id: 'p1t4', title: 'Performance concepts', tag: 'resume', subs: ['Why React re-renders and how to reason about it', 'React.memo — what it does, when it helps', 'Code splitting & lazy loading', 'Key prop — why it matters for lists', 'Web Vitals: LCP, FID, CLS'] },
      { id: 'p1t5', title: 'Component architecture', tag: 'resume', subs: ['Presentational vs container components', 'Compound components pattern', 'Render props vs HOC vs hooks', 'Atomic design — atoms, molecules, organisms', 'How design systems are structured'] },
      { id: 'p1t6', title: 'TypeScript fundamentals', tag: 'new', subs: ['Why TypeScript over JavaScript', 'Types vs interfaces', 'Generics — what they are and why', 'Utility types — Partial, Pick, Omit, Required', 'Type narrowing', 'TS with React props and hooks'] },
      { id: 'p1t7', title: 'Next.js / SSR concepts', tag: 'new', subs: ['SSR vs SSG vs CSR vs ISR — when to pick each', 'App Router vs Pages Router', 'Server vs client components', 'Data fetching patterns', 'When Next.js vs plain React'] },
    ]
  },
  {
    id: 'p2', num: '02', label: 'Phase 2', weeks: 'Weeks 4–7',
    color: '#4ECDC4', bg: '#F0FFFE',
    title: "Backend fundamentals — own what's on your resume",
    intro: 'Spring Boot, microservices, REST, databases, auth, concurrency, design patterns — you claim these on your resume. Ensure you can explain every design decision.',
    topics: [
      { id: 'p2t1', title: 'REST API design principles', tag: 'resume', subs: ['REST constraints — statelessness, uniform interface', 'HTTP method semantics & idempotency', 'Status codes 2xx/3xx/4xx/5xx', 'Pagination — cursor vs offset', 'API versioning strategies', 'Idempotency keys'] },
      { id: 'p2t2', title: 'Spring Boot mental model', tag: 'resume', subs: ['IoC — Inversion of Control', 'Dependency injection — constructor vs field', 'Bean lifecycle', 'Auto-configuration', '@RestController vs @Service vs @Repository', 'Spring Security filter chain'] },
      { id: 'p2t3', title: 'Microservices concepts', tag: 'resume', subs: ['Why microservices — coupling, team autonomy', 'Service boundaries & DDD basics', 'Sync vs async communication', 'API Gateway pattern', 'Choreography vs orchestration', 'Saga & Outbox patterns'] },
      { id: 'p2t4', title: 'OAuth2 & auth concepts', tag: 'resume', subs: ['OAuth2 flows — Auth Code, Client Credentials', 'JWT structure — header, payload, signature', 'Access vs refresh token', 'PKCE', 'Session vs token auth tradeoffs', 'CSRF, token theft'] },
      { id: 'p2t5', title: 'Databases — relational vs NoSQL', tag: 'resume', subs: ['ACID properties', 'Indexes — B-tree, reads vs writes', 'Cassandra — partition key, clustering key', 'DynamoDB — GSI, capacity modes', 'Read replicas & replication lag', 'Sharding — range vs hash', 'N+1 query problem'] },
      { id: 'p2t6', title: 'Concurrency & threading in Java', tag: 'gap', subs: ['Thread safety', 'Race conditions & deadlocks', 'Synchronized blocks & locks', 'Thread pool — ExecutorService', 'CompletableFuture', 'Why Spring WebFlux exists'] },
      { id: 'p2t7', title: 'Design patterns — the useful ones', tag: 'gap', subs: ['Singleton', 'Factory', 'Builder', 'Strategy', 'Observer', 'Repository', 'Decorator'] },
    ]
  },
  {
    id: 'p3', num: '03', label: 'Phase 3', weeks: 'Weeks 8–10',
    color: '#FFD93D', bg: '#FFFDF0',
    title: 'Backend infrastructure — caching, messaging, resilience',
    intro: 'The layer below your application code. Caching, async messaging, scaling, and fault tolerance — expected knowledge for any senior engineer in 2026.',
    topics: [
      { id: 'p3t1', title: 'Caching fundamentals + Redis', tag: 'gap', subs: ['Cache-aside, write-through, write-behind patterns', 'TTL, eviction — LRU, LFU', 'Cache stampede / thundering herd', 'Redis data structures: String, Hash, List, Set, Sorted Set', 'Redis as session store, rate limiter, distributed lock', 'Redis Cluster vs Sentinel', 'CDN & HTTP caching — Cache-Control, ETag'] },
      { id: 'p3t2', title: 'Kafka & messaging', tag: 'gap', subs: ['Producer / consumer / broker model', 'Delivery guarantees — at-most/at-least/exactly-once', 'Topics, partitions, offsets', 'Consumer groups — parallel processing', 'Kafka vs RabbitMQ vs SQS', 'Dead letter queue', 'Event sourcing pattern'] },
      { id: 'p3t3', title: 'System design building blocks', tag: 'gap', subs: ['Horizontal vs vertical scaling', 'Load balancing — consistent hashing', 'Rate limiting — token bucket vs sliding window', 'API Gateway patterns', 'WebSockets vs SSE vs long polling', 'GraphQL vs REST tradeoffs'] },
      { id: 'p3t4', title: 'Resilience & fault tolerance', tag: 'resume', subs: ['Circuit breaker — closed, open, half-open', 'Retry with exponential backoff', 'Bulkhead pattern', 'Timeout strategies', 'CAP theorem — practical version', 'Eventual consistency', 'Chaos engineering'] },
      { id: 'p3t5', title: 'Backend security', tag: 'resume', subs: ['SQL injection, XSS, CSRF', 'IDOR — insecure direct object reference', 'Mass assignment vulnerability', 'Secrets management', 'Encryption at rest vs in transit', 'Password hashing — bcrypt vs MD5', 'PII handling'] },
    ]
  },
  {
    id: 'p4', num: '04', label: 'Phase 4', weeks: 'Weeks 11–13',
    color: '#6BCB77', bg: '#F0FFF2',
    title: 'Cloud, DevOps & observability',
    intro: "AWS, Docker, Kubernetes, CI/CD, observability — you've used all of these. Build the conceptual layer so you can architect and discuss, not just operate.",
    topics: [
      { id: 'p4t1', title: 'AWS core services', tag: 'resume', subs: ['EC2 vs Lambda — when to use which', 'S3 — object storage, lifecycle, consistency', 'DynamoDB — capacity modes, GSI, streams', 'SQS vs SNS — pull vs push, fan-out', 'VPC — subnets, security groups, NACLs', 'IAM — roles vs users vs policies', 'CloudWatch — metrics, alarms, logs'] },
      { id: 'p4t2', title: 'AWS data & ML services', tag: 'resume', subs: ['Glue — ETL catalog, crawlers, jobs', 'EMR — managed Spark, when over EC2', 'SageMaker — training vs inference endpoints', 'Step Functions — state machine model', 'Kinesis vs Kafka', 'QuickSight vs Tableau'] },
      { id: 'p4t3', title: 'Docker & Kubernetes', tag: 'resume', subs: ['Containers vs VMs', 'Docker image layers & multi-stage builds', 'K8s: Pod, Deployment, Service, Ingress', 'ReplicaSet — desired state model', 'ConfigMaps and Secrets', 'Rolling updates vs blue-green vs canary'] },
      { id: 'p4t4', title: 'CI/CD & Git workflows', tag: 'resume', subs: ['CI vs CD vs Continuous Deployment', 'Pipeline stages: build, test, scan, deploy', 'Trunk-based dev vs Gitflow', 'Feature flags', 'Rollback strategies', 'Rebasing vs merging', 'Monorepo vs polyrepo'] },
      { id: 'p4t5', title: 'Observability concepts', tag: 'resume', subs: ['Logs vs metrics vs traces — the 3 pillars', 'Structured logging — JSON over plain text', 'Distributed tracing', 'SLI, SLO, SLA', 'Error budgets', 'Alert fatigue anti-patterns'] },
    ]
  },
  {
    id: 'p5', num: '05', label: 'Phase 5', weeks: 'Weeks 14–17',
    color: '#C77DFF', bg: '#FAF0FF',
    title: 'AI/ML stack + resume-specific tech',
    intro: 'Your newest and most differentiated section. Deepen the AI/RAG work, then own every specialized tool listed on your resume.',
    topics: [
      { id: 'p5t1', title: 'LLM concepts', tag: 'resume', subs: ['Transformers — attention mechanism, intuition', 'Tokens — context window matters', 'Temperature, top-p — what they control', 'Prompt types: system, user, assistant', 'Prompt engineering — CoT, few-shot, zero-shot', 'Hallucination — causes and mitigation'] },
      { id: 'p5t2', title: 'RAG pipeline — end to end', tag: 'resume', subs: ['Why RAG over fine-tuning', 'Chunking strategies — fixed, semantic, overlap', 'Embeddings — semantic meaning as vectors', 'FAISS — approximate nearest neighbor', 'Retrieval quality — precision vs recall', 'Hybrid search', 'Reranking'] },
      { id: 'p5t3', title: 'Vector databases & AI infra', tag: 'resume', subs: ['FAISS vs Pinecone vs Weaviate vs pgvector', 'Index types — flat, IVF, HNSW', 'LangChain chains vs agents', 'Tool / function calling in LLMs', 'Agentic loops — power and risk', 'LLM evaluation metrics'] },
      { id: 'p5t4', title: 'Apache Spark concepts', tag: 'resume', subs: ['RDDs vs DataFrames', 'Lazy evaluation', 'DAG execution model', 'Partitioning & shuffling', 'Spark vs plain SQL — when Spark wins'] },
      { id: 'p5t5', title: 'AEM + Tesseract OCR', tag: 'resume', subs: ['AEM — JCR content repository, Sling framework', 'AEM components and templates model', 'Why enterprises use AEM', 'Tesseract OCR pipeline — image to text', 'Confidence scores', 'Why OCR fails on variable layouts'] },
    ]
  },
  {
    id: 'p6', num: '06', label: 'Phase 6', weeks: 'Weeks 18–20',
    color: '#4D9DE0', bg: '#F0F7FF',
    title: 'Foundations, testing & engineering mindset',
    intro: 'The layer most people skip. Networking basics, data structures, testing strategy, debugging methodology, and the soft skills that determine how you show up.',
    topics: [
      { id: 'p6t1', title: 'Computer networking basics', tag: 'gap', subs: ['TCP vs UDP', 'DNS resolution — step by step', 'HTTP/1.1 vs HTTP/2 vs HTTP/3', 'TLS handshake', 'What happens when you type a URL', 'CORS — why browsers enforce it'] },
      { id: 'p6t2', title: 'Data structures — conceptual layer', tag: 'gap', subs: ['Array vs LinkedList — tradeoffs', 'HashMap — collisions, load factor', 'Stack vs Queue — LIFO vs FIFO use cases', 'Tree — BST, why search is fast', 'Heap — priority queue', 'Graph — when your data is a network', 'Big-O intuition: O(1) vs O(n) vs O(log n)'] },
      { id: 'p6t3', title: 'Testing concepts & strategy', tag: 'soft', subs: ['Testing pyramid — unit, integration, e2e', 'Test doubles — mock vs stub vs spy', 'Contract testing in microservices', 'TDD — red-green-refactor cycle', 'Shift-left testing', 'Coverage metrics'] },
      { id: 'p6t4', title: 'Code review methodology', tag: 'soft', subs: ['What to check beyond syntax', 'Reviewing for security holes', 'Spotting AI-generated code problems', 'How to give feedback that lands', 'PR best practices', 'When to approve vs block'] },
      { id: 'p6t5', title: 'Debugging methodology', tag: 'soft', subs: ['Hypothesis-driven debugging', 'Binary search approach to isolating bugs', 'Reading stack traces effectively', 'Reproducing bugs — minimal reproducible examples', 'Using logs as debugging tools', 'Production debugging constraints'] },
      { id: 'p6t6', title: 'Technical communication', tag: 'soft', subs: ['Architecture Decision Records (ADRs)', 'RFC — how engineering teams make decisions', 'Explaining tech to non-technical stakeholders', 'Writing incident postmortems', 'Navigating large unfamiliar codebases', 'Giving and receiving technical feedback'] },
    ]
  }
]

export const RESOURCES = [
  // ── Phase 1 · React ──────────────────────────────────────────
  { phase: 'p1', phaseLabel: 'Phase 1', topic: 'React core mental model', type: 'youtube', name: 'Virtual DOM & Reconciliation Explained', desc: 'Covers Virtual DOM, Fiber, reconciliation and diffing in depth. Exactly what you need for this topic.', url: 'https://www.youtube.com/watch?v=gpFfpO4C2JM' },
  { phase: 'p1', phaseLabel: 'Phase 1', topic: 'React core mental model', type: 'docs', name: 'Thinking in React — react.dev', desc: 'The official mental model. Read this before anything else — props, state, and data flow perfectly explained.', url: 'https://react.dev/learn/thinking-in-react' },
  { phase: 'p1', phaseLabel: 'Phase 1', topic: 'Hooks — the real why', type: 'youtube', name: 'All React Hooks in 12 Minutes', desc: 'Fast visual walkthrough of every hook — useState, useEffect, useCallback, useMemo, useRef. Best quick reference.', url: 'https://www.youtube.com/watch?v=LOH1l-MP_9k' },
  { phase: 'p1', phaseLabel: 'Phase 1', topic: 'Hooks — the real why', type: 'youtube', name: 'useEffect Simply Explained', desc: 'Focused entirely on useEffect — dependency array, cleanup, and all the gotchas. Essential for debugging.', url: 'https://www.youtube.com/watch?v=-4XpG5_Lj_o' },
  { phase: 'p1', phaseLabel: 'Phase 1', topic: 'State management patterns', type: 'youtube', name: '8 React Hooks — useState & useContext Deep Dive', desc: 'Deep dive on useState, useContext and state patterns — when to use each and why.', url: 'https://www.youtube.com/watch?v=DfTTn6gKPG4' },
  { phase: 'p1', phaseLabel: 'Phase 1', topic: 'Performance concepts', type: 'youtube', name: 'React Re-renders & Optimization — Jack Herrington', desc: 'Why React re-renders, React.memo, useMemo, useCallback with real examples. Jack Herrington at his best.', url: 'https://www.youtube.com/watch?v=1YzpBI4e2MA' },
  { phase: 'p1', phaseLabel: 'Phase 1', topic: 'TypeScript fundamentals', type: 'youtube', name: 'TypeScript Generics in 13 Minutes', desc: 'Best short video on TypeScript generics — clear, practical, no fluff.', url: 'https://www.youtube.com/watch?v=EcCTIExsqmI' },
  { phase: 'p1', phaseLabel: 'Phase 1', topic: 'TypeScript fundamentals', type: 'youtube', name: 'Advanced TypeScript: Generics — Matt Pocock', desc: 'Matt Pocock (author of Total TypeScript) teaches generics from scratch. The gold standard.', url: 'https://www.youtube.com/watch?v=xk_PbxR7G8A' },
  { phase: 'p1', phaseLabel: 'Phase 1', topic: 'Next.js / SSR concepts', type: 'youtube', name: 'Next.js App Router: SSR vs SSG vs CSR Explained — ByteGrad', desc: 'ByteGrad explains rendering strategies in Next.js App Router clearly.', url: 'https://www.youtube.com/watch?v=YkxrbxoqHDw' },

  // ── Phase 2 · Backend ─────────────────────────────────────────
  { phase: 'p2', phaseLabel: 'Phase 2', topic: 'Spring Boot mental model', type: 'youtube', name: 'Spring Boot IoC & Dependency Injection', desc: 'Covers IoC container, @Component, @Autowired, DI patterns — exactly the Spring mental model you need.', url: 'https://www.youtube.com/watch?v=CVSxiVquIrI' },
  { phase: 'p2', phaseLabel: 'Phase 2', topic: 'Spring Boot mental model', type: 'docs', name: 'Baeldung — Spring IoC & DI Guide', desc: 'Best written reference for Spring IoC and DI. Covers constructor vs setter injection, ApplicationContext.', url: 'https://www.baeldung.com/inversion-control-and-dependency-injection-in-spring' },
  { phase: 'p2', phaseLabel: 'Phase 2', topic: 'REST API design principles', type: 'youtube', name: 'REST API Design Best Practices — Amigoscode', desc: 'HTTP methods, status codes, versioning, pagination — the full REST design picture.', url: 'https://www.youtube.com/watch?v=_gQaygjm_hg' },
  { phase: 'p2', phaseLabel: 'Phase 2', topic: 'Microservices concepts', type: 'youtube', name: 'Microservices Explained — TechWorld with Nana', desc: 'Why microservices exist, service boundaries, communication patterns. Best intro video.', url: 'https://www.youtube.com/watch?v=T-m7ZFxeg1A' },
  { phase: 'p2', phaseLabel: 'Phase 2', topic: 'OAuth2 & auth concepts', type: 'youtube', name: 'OAuth 2.0 Explained in 5 Minutes', desc: 'The clearest short explanation of OAuth2 flows — authorization code, tokens, refresh tokens.', url: 'https://www.youtube.com/watch?v=ZV5yTm4pT8g' },
  { phase: 'p2', phaseLabel: 'Phase 2', topic: 'Databases — relational vs NoSQL', type: 'youtube', name: 'SQL vs NoSQL — Hussein Nasser', desc: 'Hussein Nasser explains when to pick SQL vs NoSQL, with real tradeoffs. His database series is the best on YouTube.', url: 'https://www.youtube.com/watch?v=_Ss42Vb1SU4' },
  { phase: 'p2', phaseLabel: 'Phase 2', topic: 'Concurrency & threading in Java', type: 'youtube', name: 'Java Concurrency — Defog Tech', desc: 'Thread safety, race conditions, deadlocks, thread pools explained clearly. Best Java concurrency resource on YouTube.', url: 'https://www.youtube.com/watch?v=WldMTtUWqTg' },
  { phase: 'p2', phaseLabel: 'Phase 2', topic: 'Design patterns — the useful ones', type: 'youtube', name: '10 Design Patterns in 10 Minutes — Fireship', desc: 'Singleton, Factory, Observer, Strategy and more in 10 minutes. Perfect mental models.', url: 'https://www.youtube.com/watch?v=tv-_1er1mWI' },

  // ── Phase 3 · Infrastructure ──────────────────────────────────
  { phase: 'p3', phaseLabel: 'Phase 3', topic: 'Caching fundamentals + Redis', type: 'youtube', name: 'What Is Redis Really About? — ByteByteGo', desc: 'ByteByteGo explains Redis — what it is, why it is fast, and its most common use cases.', url: 'https://www.youtube.com/watch?v=z_NbVtbgBJw' },
  { phase: 'p3', phaseLabel: 'Phase 3', topic: 'Caching fundamentals + Redis', type: 'youtube', name: 'Caching Strategies — ByteByteGo', desc: 'Cache-aside, write-through, write-behind, TTL, eviction policies all covered in one video.', url: 'https://www.youtube.com/watch?v=dGAgxozNWFE' },
  { phase: 'p3', phaseLabel: 'Phase 3', topic: 'Kafka & messaging', type: 'youtube', name: 'Apache Kafka in 3 Minutes — ByteByteGo', desc: 'Best quick intro to Kafka — topics, partitions, consumers, offsets explained visually.', url: 'https://www.youtube.com/watch?v=HZklgPkboro' },
  { phase: 'p3', phaseLabel: 'Phase 3', topic: 'Kafka & messaging', type: 'youtube', name: 'Why is Kafka So Popular? — ByteByteGo', desc: 'Why Kafka beats traditional queues, consumer groups, retention, and real use cases.', url: 'https://www.youtube.com/watch?v=yIAcHMJzqJc' },
  { phase: 'p3', phaseLabel: 'Phase 3', topic: 'System design building blocks', type: 'youtube', name: 'Consistent Hashing Explained — ByteByteGo', desc: 'Visual explanation of consistent hashing — most important concept in distributed system design.', url: 'https://www.youtube.com/watch?v=UF9Iqmg94tk' },
  { phase: 'p3', phaseLabel: 'Phase 3', topic: 'Resilience & fault tolerance', type: 'youtube', name: 'Circuit Breaker Pattern Explained', desc: 'Circuit breaker closed, open, half-open states with real-world examples.', url: 'https://www.youtube.com/watch?v=ADHjMs2es0I' },
  { phase: 'p3', phaseLabel: 'Phase 3', topic: 'Backend security', type: 'site', name: 'OWASP Top 10', desc: 'Official reference for web security vulnerabilities. Read SQL injection, XSS, CSRF, and IDOR entries specifically.', url: 'https://owasp.org/Top10' },

  // ── Phase 4 · Cloud & DevOps ──────────────────────────────────
  { phase: 'p4', phaseLabel: 'Phase 4', topic: 'Docker & Kubernetes', type: 'youtube', name: 'Docker Tutorial for Beginners — TechWorld with Nana', desc: 'Containers vs VMs, image layers, networking, volumes. The best Docker course on YouTube.', url: 'https://www.youtube.com/watch?v=3c-iBn73dDE' },
  { phase: 'p4', phaseLabel: 'Phase 4', topic: 'Docker & Kubernetes', type: 'youtube', name: 'Kubernetes Crash Course — TechWorld with Nana', desc: 'Pods, Deployments, Services, Ingress, ConfigMaps — the full K8s mental model in one video.', url: 'https://www.youtube.com/watch?v=s_o8dwzRlu4' },
  { phase: 'p4', phaseLabel: 'Phase 4', topic: 'AWS core services', type: 'course', name: 'AWS Cloud Practitioner Essentials (free)', desc: 'Covers EC2, S3, Lambda, DynamoDB, VPC, IAM, CloudWatch conceptually. No coding needed.', url: 'https://explore.skillbuilder.aws/learn/course/external/view/elearning/134/aws-cloud-practitioner-essentials' },
  { phase: 'p4', phaseLabel: 'Phase 4', topic: 'CI/CD & Git workflows', type: 'youtube', name: 'CI/CD Explained — TechWorld with Nana', desc: 'CI vs CD vs Continuous Deployment, pipeline stages, and how it all connects.', url: 'https://www.youtube.com/watch?v=scEDHsr3APg' },
  { phase: 'p4', phaseLabel: 'Phase 4', topic: 'Observability concepts', type: 'youtube', name: 'Logs Metrics Traces — ByteByteGo', desc: 'The 3 pillars of observability — what each is, when to use which, how they connect.', url: 'https://www.youtube.com/watch?v=7i0hB4vSSp4' },

  // ── Phase 5 · AI/ML ───────────────────────────────────────────
  { phase: 'p5', phaseLabel: 'Phase 5', topic: 'LLM concepts', type: 'youtube', name: '[1hr Talk] Intro to Large Language Models — Karpathy', desc: 'The single best LLM explainer on the internet. Tokens, training, inference, how LLMs think. Watch this first.', url: 'https://www.youtube.com/watch?v=zjkBMFhNj_g' },
  { phase: 'p5', phaseLabel: 'Phase 5', topic: 'LLM concepts', type: 'youtube', name: 'Deep Dive into LLMs like ChatGPT — Karpathy', desc: '3-hour deep dive into the full LLM training stack — pretraining, fine-tuning, RLHF, prompting.', url: 'https://www.youtube.com/watch?v=7xTGNNLPyMI' },
  { phase: 'p5', phaseLabel: 'Phase 5', topic: 'RAG pipeline — end to end', type: 'youtube', name: 'RAG Explained in 8 Minutes', desc: 'Clear visual explanation of RAG — embeddings, vector search, retrieval, generation.', url: 'https://www.youtube.com/watch?v=HREbdmOSQ18' },
  { phase: 'p5', phaseLabel: 'Phase 5', topic: 'RAG pipeline — end to end', type: 'youtube', name: 'RAG Full Pipeline — Embeddings, FAISS, HNSW', desc: 'Covers the entire RAG pipeline including sentence BERT embeddings, FAISS vector search, and HNSW indexing.', url: 'https://www.youtube.com/watch?v=rhZgXNdhWDY' },
  { phase: 'p5', phaseLabel: 'Phase 5', topic: 'Vector databases & AI infra', type: 'course', name: 'LangChain for LLM Apps — DeepLearning.AI (free)', desc: 'Free 1-hour course by the LangChain creator. Chains, agents, memory, and retrieval.', url: 'https://learn.deeplearning.ai/courses/langchain' },
  { phase: 'p5', phaseLabel: 'Phase 5', topic: 'Apache Spark concepts', type: 'youtube', name: 'Apache Spark Tutorial — Databricks', desc: 'Official Databricks tutorial covering RDDs, DataFrames, lazy evaluation, and DAG execution model.', url: 'https://www.youtube.com/watch?v=IQfG0faDrzE' },

  // ── Phase 6 · Foundations ─────────────────────────────────────
  { phase: 'p6', phaseLabel: 'Phase 6', topic: 'Computer networking basics', type: 'youtube', name: 'What Happens When You Type a URL — ByteByteGo', desc: 'DNS to TCP to TLS to HTTP step by step. The most important networking video for developers.', url: 'https://www.youtube.com/watch?v=AlkDbnbv7dk' },
  { phase: 'p6', phaseLabel: 'Phase 6', topic: 'Computer networking basics', type: 'youtube', name: 'HTTP/1.1 vs HTTP/2 vs HTTP/3 — ByteByteGo', desc: 'Why HTTP/2 added multiplexing and HTTP/3 switched to QUIC. Essential for any web developer.', url: 'https://www.youtube.com/watch?v=0OrmKCB0UrQ' },
  { phase: 'p6', phaseLabel: 'Phase 6', topic: 'Data structures — conceptual layer', type: 'youtube', name: 'Data Structures Full Course — William Fiset', desc: 'HashMap, trees, heaps, graphs explained conceptually with animations. No coding required to benefit.', url: 'https://www.youtube.com/watch?v=RBSGKlAvoiM' },
  { phase: 'p6', phaseLabel: 'Phase 6', topic: 'Testing concepts & strategy', type: 'youtube', name: 'Testing Pyramid & Types of Tests Explained', desc: 'Unit vs integration vs e2e testing, mocks vs stubs vs spies, TDD — the full testing mental model.', url: 'https://www.youtube.com/watch?v=r9HdJ8P6GQI' },
  { phase: 'p6', phaseLabel: 'Phase 6', topic: 'Code review methodology', type: 'youtube', name: 'How to Do Code Reviews Like a Human — GOTO Conferences', desc: 'Senior engineer at Google on how to give effective, kind, and actionable code review feedback.', url: 'https://www.youtube.com/watch?v=0t4_MfHgb_A' },
  { phase: 'p6', phaseLabel: 'Phase 6', topic: 'Technical communication', type: 'book', name: 'A Philosophy of Software Design — Ousterhout', desc: 'Best book on code quality thinking, naming, abstraction. Read alongside your code review prep.', url: 'https://www.amazon.com/s?k=philosophy+software+design+ousterhout' },
]

export const TAG_CONFIG = {
  gap:    { label: 'Knowledge gap', classes: 'bg-red-50 text-red-600 border-red-100' },
  resume: { label: 'Resume claim',  classes: 'bg-blue-50 text-blue-600 border-blue-100' },
  new:    { label: 'New / 2026',    classes: 'bg-purple-50 text-purple-600 border-purple-100' },
  soft:   { label: 'Mindset',       classes: 'bg-green-50 text-green-600 border-green-100' },
}

export const RESOURCE_TYPE_CONFIG = {
  youtube: { label: 'YouTube',  classes: 'bg-red-50 text-red-500' },
  docs:    { label: 'Docs',     classes: 'bg-blue-50 text-blue-600' },
  course:  { label: 'Course',   classes: 'bg-green-50 text-green-600' },
  book:    { label: 'Book',     classes: 'bg-amber-50 text-amber-600' },
  site:    { label: 'Site',     classes: 'bg-purple-50 text-purple-600' },
}
