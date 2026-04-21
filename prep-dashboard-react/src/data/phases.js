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
  { phase: 'p1', phaseLabel: 'Phase 1', type: 'youtube', name: 'Theo (t3.gg)', desc: 'Best React + TypeScript + Next.js channel in 2026.', url: 'https://youtube.com/@t3dotgg' },
  { phase: 'p1', phaseLabel: 'Phase 1', type: 'youtube', name: 'Jack Herrington', desc: 'Deep concept-first videos on hooks, React internals, TypeScript generics.', url: 'https://youtube.com/@jherr' },
  { phase: 'p1', phaseLabel: 'Phase 1', type: 'youtube', name: 'ByteGrad', desc: 'Short focused videos on Next.js App Router and server components.', url: 'https://youtube.com/@ByteGrad' },
  { phase: 'p1', phaseLabel: 'Phase 1', type: 'docs', name: 'react.dev', desc: 'New hooks-first docs with interactive examples. Read "Thinking in React" first.', url: 'https://react.dev' },
  { phase: 'p1', phaseLabel: 'Phase 1', type: 'docs', name: 'Next.js Docs', desc: 'App Router docs are excellent. Read the rendering section carefully.', url: 'https://nextjs.org/docs' },
  { phase: 'p1', phaseLabel: 'Phase 1', type: 'course', name: 'Total TypeScript — Matt Pocock', desc: 'The best TypeScript resource. Free beginner workshops on his site.', url: 'https://www.totaltypescript.com' },
  { phase: 'p2', phaseLabel: 'Phase 2', type: 'youtube', name: 'Amigoscode', desc: 'Best Spring Boot channel. Spring Boot + Security + Microservices playlists.', url: 'https://youtube.com/@amigoscode' },
  { phase: 'p2', phaseLabel: 'Phase 2', type: 'youtube', name: 'Java Brains', desc: 'Excellent conceptual explanations of Spring, OAuth2, JWT, microservices.', url: 'https://youtube.com/@Java.Brains' },
  { phase: 'p2', phaseLabel: 'Phase 2', type: 'youtube', name: 'Defog Tech', desc: 'Short focused videos on Java concurrency, thread pools, design patterns.', url: 'https://youtube.com/@DefogTech' },
  { phase: 'p2', phaseLabel: 'Phase 2', type: 'youtube', name: 'Hussein Nasser', desc: 'Database fundamentals, indexing, replication — explained brilliantly.', url: 'https://youtube.com/@hnasr' },
  { phase: 'p2', phaseLabel: 'Phase 2', type: 'book', name: 'Designing Data-Intensive Applications', desc: 'Kleppmann. Chapters 1–5 cover databases better than anything else.', url: 'https://dataintensive.net' },
  { phase: 'p2', phaseLabel: 'Phase 2', type: 'docs', name: 'Baeldung', desc: 'Best reference for Spring Boot. Read their OAuth2 and Security guides.', url: 'https://www.baeldung.com' },
  { phase: 'p3', phaseLabel: 'Phase 3', type: 'youtube', name: 'ByteByteGo (Alex Xu)', desc: '#1 system design channel. Caching, Kafka, rate limiting — all here.', url: 'https://youtube.com/@ByteByteGo' },
  { phase: 'p3', phaseLabel: 'Phase 3', type: 'youtube', name: 'TechWorld with Nana', desc: 'Best Kafka beginner series. Clear visuals, concept-first.', url: 'https://youtube.com/@TechWorldwithNana' },
  { phase: 'p3', phaseLabel: 'Phase 3', type: 'course', name: 'Redis University (free)', desc: '"Redis for Developers" covers all data structures and patterns.', url: 'https://university.redis.com' },
  { phase: 'p3', phaseLabel: 'Phase 3', type: 'book', name: 'System Design Interview Vol 1 & 2', desc: 'Alex Xu. Rate limiting, caching, consistent hashing — all covered.', url: 'https://www.amazon.com/s?k=alex+xu+system+design' },
  { phase: 'p3', phaseLabel: 'Phase 3', type: 'site', name: 'OWASP Top 10', desc: 'Official reference for web security vulnerabilities. Read every entry.', url: 'https://owasp.org/Top10' },
  { phase: 'p4', phaseLabel: 'Phase 4', type: 'youtube', name: 'TechWorld with Nana', desc: 'Best Docker and Kubernetes beginner series. Concept-first, clear visuals.', url: 'https://youtube.com/@TechWorldwithNana' },
  { phase: 'p4', phaseLabel: 'Phase 4', type: 'youtube', name: 'Stephane Maarek', desc: 'Best AWS channel. Free overview videos cover every service you need.', url: 'https://youtube.com/@StephaneMaarek' },
  { phase: 'p4', phaseLabel: 'Phase 4', type: 'youtube', name: 'Anton Putra', desc: 'Deep Kubernetes and observability (Prometheus, Grafana) walkthroughs.', url: 'https://youtube.com/@AntonPutra' },
  { phase: 'p4', phaseLabel: 'Phase 4', type: 'course', name: 'AWS Skill Builder (free)', desc: '"AWS Cloud Practitioner Essentials" covers all core services conceptually.', url: 'https://explore.skillbuilder.aws' },
  { phase: 'p4', phaseLabel: 'Phase 4', type: 'site', name: 'The Twelve-Factor App', desc: 'Conceptual foundation behind CI/CD, containers, cloud-native apps.', url: 'https://12factor.net' },
  { phase: 'p5', phaseLabel: 'Phase 5', type: 'youtube', name: 'Andrej Karpathy', desc: '"Intro to Large Language Models" and "Let\'s build GPT". Conceptual gold.', url: 'https://youtube.com/@AndrejKarpathy' },
  { phase: 'p5', phaseLabel: 'Phase 5', type: 'youtube', name: 'Sam Witteveen', desc: 'Practical LangChain, RAG, and LLM pipeline tutorials — concept + demo.', url: 'https://youtube.com/@samwitteveenai' },
  { phase: 'p5', phaseLabel: 'Phase 5', type: 'course', name: 'DeepLearning.AI Short Courses', desc: 'Free 1-hour courses on LLMs, RAG, LangChain by the actual library authors.', url: 'https://learn.deeplearning.ai' },
  { phase: 'p5', phaseLabel: 'Phase 5', type: 'youtube', name: 'Databricks (Spark)', desc: 'Concept-first Spark videos covering RDDs, lazy evaluation, DAGs.', url: 'https://youtube.com/@Databricks' },
  { phase: 'p5', phaseLabel: 'Phase 5', type: 'docs', name: 'LangChain Conceptual Docs', desc: 'Conceptual guides explain chains vs agents clearly.', url: 'https://python.langchain.com/docs/concepts' },
  { phase: 'p6', phaseLabel: 'Phase 6', type: 'youtube', name: 'ByteByteGo (Networking)', desc: 'His networking series (DNS, TCP/IP, HTTP) is the clearest available.', url: 'https://youtube.com/@ByteByteGo' },
  { phase: 'p6', phaseLabel: 'Phase 6', type: 'youtube', name: 'Fireship', desc: '100-second concept videos for networking, data structures, git workflows.', url: 'https://youtube.com/@Fireship' },
  { phase: 'p6', phaseLabel: 'Phase 6', type: 'youtube', name: 'GOTO Conferences', desc: 'Engineering mindset talks from senior engineers at top companies.', url: 'https://youtube.com/@GOTO-' },
  { phase: 'p6', phaseLabel: 'Phase 6', type: 'book', name: 'A Philosophy of Software Design', desc: 'Ousterhout. Best book on code quality thinking, naming, abstraction.', url: 'https://www.amazon.com/s?k=philosophy+software+design+ousterhout' },
  { phase: 'p6', phaseLabel: 'Phase 6', type: 'site', name: 'roadmap.sh', desc: 'Use the full-stack and backend roadmaps as audit checklists.', url: 'https://roadmap.sh' },
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
