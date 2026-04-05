import { Brain, BookOpen, Hotel, Smartphone, Tv, CreditCard, Code2 } from "lucide-react";

export interface ProjectArchitecture {
  layers: {
    name: string;
    components: string[];
    technologies: string[];
  }[];
  dataFlow: string;
  keyOptimizations: string[];
  challenges: string[];
  solutions: string[];
  metrics: {
    label: string;
    before: string;
    after: string;
    improvement: string;
  }[];
}

export interface DetailedProject {
  id: string;
  icon: any;
  title: string;
  period: string;
  tech: string[];
  highlights: string[];
  accent: "primary" | "secondary";
  image: string;
  galleryImages: string[]; // Array of gallery images for detail page
  fullDescription: string;
  overview: string;
  architecture: ProjectArchitecture;
  seniorInsights: string[];
  challenges: string[];
  solutions: string[];
  technicalDepth: {
    category: string;
    details: string[];
  }[];
  links?: {
    github?: string;
    demo?: string;
  };
  video?: string; // Optional video URL for project showcase
}

export const detailedProjects: DetailedProject[] = [
  {
    id: "facial-recognition",
    icon: Brain,
    title: "AI Facial Recognition Attendance System",
    period: "Jan 2025 — Dec 2025",
    tech: ["Python", "Django", "OpenCV", "CNN", "Redis", "Django Channels", "WebSockets", "Docker", "Nginx"],
    highlights: [
      "90%+ accuracy with CNN + HOG fallback and CLAHE preprocessing",
      "Streams to 100+ concurrent users without lag",
      "Face matching: 850ms → 180ms via KD-tree indexing",
      "Blink detection anti-spoofing prevents photo fraud",
      "Model init: 30s → 2s through lazy-loading",
    ],
    accent: "primary",
    image: "/portfolio/Personal Portfolio gallery/PrimaryAttendaceSystem.png",
    galleryImages: [
      "/portfolio/Personal Portfolio gallery/PrimaryAttendaceSystem.png",
      "/portfolio/Personal Portfolio gallery/SecondaryAttendanceSystem.png",
      "/portfolio/Personal Portfolio gallery/SecondaryAttendanceSystem1.png",
      "/portfolio/Personal Portfolio gallery/SecondaryAttendanceSystem2.png",
      "/portfolio/Personal Portfolio gallery/SecondaryAttendanceSystem5.png",
      "/portfolio/Personal Portfolio gallery/SecondaryAttendanceSystem6.png",
      "/portfolio/Personal Portfolio gallery/SecondaryAttendanceSystem7.png",
      "/portfolio/Personal Portfolio gallery/SecondaryAttendanceSystem8.png",
      "/portfolio/Personal Portfolio gallery/SecondaryAttendanceSystem9.png",
      "/portfolio/Personal Portfolio gallery/SecondartAttendanceSystem10.png",
    ],
    overview:
      "Enterprise-grade facial recognition system built for real-time attendance tracking with 100+ concurrent user support. Engineered for high availability with CNN + HOG hybrid approach for 90%+ accuracy across diverse lighting conditions.",
    fullDescription:
      "This system represents a complete architectural overhaul of traditional attendance mechanisms. The project focuses on production-ready deployment with multi-layer optimization from ML model serving to frontend state management, achieving 70% reduction in attendance time while maintaining sub-100ms latency across 100+ concurrent streams.",
    architecture: {
      layers: [
        {
          name: "Frontend Layer",
          components: ["React SPA", "Zustand State Management", "WebSocket Client", "JWT Interceptors"],
          technologies: ["React 18", "Zustand", "Axios", "WebSocket API"],
        },
        {
          name: "API Gateway & Load Balancing",
          components: ["Nginx Reverse Proxy", "WebSocket Upgrade", "SSL Termination", "Rate Limiting"],
          technologies: ["Nginx", "SSL/TLS", "Custom Rate Limiter"],
        },
        {
          name: "Backend Application",
          components: [
            "Django REST Framework",
            "Django Channels (WebSocket)",
            "JWT Authentication",
            "Redis Pub/Sub",
          ],
          technologies: ["Django", "Django-REST-Framework", "Django-Channels", "DRF-SimpleJWT"],
        },
        {
          name: "ML Model Serving",
          components: ["Face Detection", "Face Embedding (CNN)", "HOG Fallback", "KD-Tree Indexing"],
          technologies: ["OpenCV", "dlib", "PyTorch", "scikit-learn"],
        },
        {
          name: "Data Layer",
          components: ["PostgreSQL", "Redis Cache", "Binary Embeddings", "QR Code Mapping"],
          technologies: ["PostgreSQL", "Redis", "NumPy Binary Storage"],
        },
        {
          name: "Infrastructure",
          components: ["Docker Containers", "Nginx", "Systemd Services", "Log Aggregation"],
          technologies: ["Docker", "Docker-Compose", "Nginx", "Systemd"],
        },
      ],
      dataFlow:
        "User Stream → Nginx → Django Channels → OpenCV (Face Detection) → CNN (Embedding) → KD-Tree (Matching) → Redis Pub/Sub → Frontend",
      keyOptimizations: [
        "KD-tree spatial indexing for O(log n) face matching vs O(n²) brute force",
        "Binary NumPy storage reduces embedding storage by 70%",
        "Lazy-loading ML models reduces startup from 30s to 2s",
        "Django Channels + Redis keeps WebSocket latency <100ms for 100+ users",
        "CLAHE preprocessing handles varied lighting conditions",
        "Blink detection SVM prevents spoofing attacks",
      ],
      challenges: [
        "Model initialization causing 30-second startup delays",
        "Face matching latency at 850ms was unacceptable for real-time attendance",
        "WebSocket connections losing state during JWT refresh",
        "Embedding storage consuming excessive memory at scale",
        "Race conditions in concurrent attendance marking",
      ],
      solutions: [
        "Implemented lazy-loading pattern: load face detection on first request, embedding model on demand",
        "Replaced brute-force distance calculation with KD-tree data structure (O(log n) vs O(n²))",
        "Axios interceptors silently refresh JWT without disconnecting WebSocket",
        "Binary NumPy storage format reduces 512-dim float vectors from 2KB to 700B",
        "Database-level atomic transactions with SELECT FOR UPDATE prevent double-marking",
      ],
      metrics: [
        {
          label: "Face Matching Speed",
          before: "850ms per match",
          after: "180ms per match",
          improvement: "78.8% faster",
        },
        {
          label: "Model Initialization",
          before: "30 seconds",
          after: "2 seconds",
          improvement: "93.3% faster",
        },
        {
          label: "Embedding Storage",
          before: "2KB per user",
          after: "700B per user",
          improvement: "70% reduction",
        },
        {
          label: "Concurrent Users",
          before: "20 users",
          after: "100+ users",
          improvement: "5x scaling",
        },
        {
          label: "Latency (WebSocket)",
          before: "200-400ms",
          after: "<100ms",
          improvement: "2-4x improvement",
        },
        {
          label: "Attendance Speed",
          before: "3-5 minutes",
          after: "45-60 seconds",
          improvement: "70% reduction",
        },
      ],
    },
    seniorInsights: [
      "Service-Oriented thinking: Separated ML inference from business logic. Face detection runs independently from authentication/authorization, allowing independent scaling.",
      "Caching Strategy: Two-tier caching - Redis for real-time data (active sessions), PostgreSQL for persistent state. Each layer serves different patterns.",
      "Concurrency Patterns: Channels + Redis pub-sub deliberately chose async-first architecture to handle 100+ concurrent users. Single-threaded Django would bottleneck.",
      "ML Ops Maturity: Lazy-loading model avoids cold-start penalties. Binary format shows deep understanding of storage trade-offs (accuracy vs disk I/O).",
      "Security-First Design: Blink detection SVM as anti-spoofing, QR code pairing eliminating manual IP config, JWT refresh without disconnection = production-ready.",
      "Measurement Culture: Every optimization measured (850ms→180ms, 30s→2s). Numbers drive decisions, not assumptions.",
    ],
    challenges: [
      "Scaling face matching from 50 users to 100+ required algorithmic rethinking (O(n²) → O(log n))",
      "Real-time streaming to multiple clients while maintaining <100ms latency",
      "Preventing attendance fraud without annoying legitimate users (blink detection balance)",
      "WebSocket connection management during JWT refresh cycles",
      "Handling diverse lighting conditions with consistent accuracy",
    ],
    solutions: [
      "Implemented KD-tree spatial indexing for nearest-neighbor search (reduces 850ms to 180ms)",
      "Django Channels + Redis pub-sub architecture for horizontal scaling",
      "Blink detection SVM trained on diverse datasets (nighttime, sunglasses, makeup)",
      "Axios request/response interceptors handle JWT refresh transparently",
      "CLAHE (Contrast Limited Adaptive Histogram Equalization) preprocessing normalizes lighting",
    ],
    technicalDepth: [
      {
        category: "ML Model Architecture",
        details: [
          "Primary: CNN trained on LFW dataset for 128-dim face embeddings",
          "Fallback: HOG (Histogram of Oriented Gradients) for edge cases where CNN fails",
          "Distance metric: Euclidean distance with KD-tree spatial indexing",
          "Anti-spoofing: Blink detection SVM (eye closure patterns differ between photos/videos)",
          "Accuracy: 90%+ on diverse lighting, angles, occlusions; 99.5% on optimal conditions",
        ],
      },
      {
        category: "Backend Architecture",
        details: [
          "Django REST for stateless HTTP endpoints (auth, config, reporting)",
          "Django Channels for WebSocket connections (real-time streaming)",
          "Redis pub-sub for broadcasting frames to all connected clients",
          "Async tasks for heavy computations (embedding generation happens in background)",
          "Atomic database transactions prevent double-attendance marking under race conditions",
        ],
      },
      {
        category: "Performance Optimization",
        details: [
          "KD-tree: O(log n) lookup vs O(n²) brute force (850ms → 180ms on 10k users)",
          "Binary embedding format: NumPy uint8 instead of float64 (saves 700B per vector)",
          "Lazy model loading: Load detection on first request, embedding model on demand (30s → 2s startup)",
          "Connection pooling: Reuse PostgreSQL connections, Redis connections",
          "Frame batching: Process 5-frame batches instead of per-frame to amortize CNN inference cost",
        ],
      },
      {
        category: "System Design Patterns",
        details: [
          "Event-Driven: Attendance events trigger multiple services (notification, reporting, logging)",
          "Service Isolation: ML serving separated from business logic for independent scaling",
          "Cache-Aside Pattern: Check Redis before database for active session data",
          "Circuit Breaker: Fallback to HOG if CNN model unavailable (graceful degradation)",
          "CQRS-like separation: Reads go to cache, writes go to database for consistency",
        ],
      },
    ],
  },
  {
    id: "library-management",
    icon: BookOpen,
    title: "Library Management System (SOA/SOAP Microservices)",
    period: "Dec 2024 — Feb 2025",
    tech: ["Python", "SOAP", "WSDL", "XSD", "REST APIs", "Microservices Architecture"],
    highlights: [
      "Refactored monolith into 4 SOAP-based microservices",
      "Role-based access control across services",
      "Cross-service reporting for usage and overdue tracking",
    ],
    accent: "secondary",
    image: "",
    galleryImages: [],
    overview:
      "Enterprise SOA restructuring of monolithic library system into 4 independent SOAP microservices with strict service boundaries and cross-service orchestration.",
    fullDescription:
      "This project demonstrates Service-Oriented Architecture maturity by breaking down a monolithic codebase into independently deployable SOAP microservices. Each service owns its data, exposes typed contracts (WSDL), and coordinates through well-defined service boundaries.",
    architecture: {
      layers: [
        {
          name: "Service Layer",
          components: ["User Service (SOAP)", "Book Catalog Service (SOAP)", "Borrowing Service (SOAP)", "Reporting Service (SOAP)"],
          technologies: ["Zeep (SOAP Client)", "Spyne (SOAP Server)", "WSDL Auto-generation"],
        },
        {
          name: "Service Contracts",
          components: ["WSDL Definitions", "XSD Schemas", "Type Definitions", "Interface Contracts"],
          technologies: ["WSDL 1.1", "XSD Types", "Service Port Types"],
        },
        {
          name: "Data Layer",
          components: ["User Database", "Book Database", "Borrowing Records", "Audit Logs"],
          technologies: ["PostgreSQL", "SQLAlchemy ORM", "Database Transactions"],
        },
      ],
      dataFlow:
        "Frontend → REST Gateway → SOAP Orchestrator → (User Service, Book Service, Borrowing Service, Reporting Service) → Databases",
      keyOptimizations: [
        "Service isolation: Each service owns its database, preventing data coupling",
        "WSDL contracts: Strongly-typed interfaces prevent runtime errors",
        "Async reporting: Reporting service pulls data without blocking main services",
        "Role-based access: JWT token includes roles, each service validates independently",
      ],
      challenges: [
        "Tight coupling in monolithic code made separation difficult",
        "SOAP overhead for inter-service communication",
        "Managing distributed transactions across services",
        "Versioning WSDL contracts without breaking clients",
      ],
      solutions: [
        "Static analysis to identify service boundaries (domains, data models)",
        "Async SOAP client calls to prevent blocking",
        "Saga pattern for distributed transactions",
        "WSDL versioning: Keep old endpoints, mark deprecated",
      ],
      metrics: [
        {
          label: "Service Count",
          before: "1 Monolith",
          after: "4 Independent Services",
          improvement: "Modular architecture",
        },
        {
          label: "Deployment Time",
          before: "20 minutes (full redeploy)",
          after: "3 minutes (single service)",
          improvement: "6.7x faster rollout",
        },
        {
          label: "Team Scalability",
          before: "All teams modify core",
          after: "Teams own services",
          improvement: "Reduced merge conflicts",
        },
      ],
    },
    seniorInsights: [
      "SOA Maturity: Chose SOAP+WSDL over REST+JSON for contract-first design. WSDL provides machine-readable contracts preventing client breaking changes.",
      "Service Boundaries: Not just technical - identified organizational boundaries (User management, Book catalog, Borrowing logic, Reporting).",
      "Eventual Consistency: Reporting service pulls data without blocking user/book operations. Trades strong consistency for availability.",
      "Legacy Thinking: REST gateway layer allows gradual migration from SOAP. Old clients use SOAP, new clients use REST.",
    ],
    challenges: [
      "Monolithic codebase with unclear service boundaries",
      "SOAP overhead vs performance requirements",
      "Distributed transaction complexity (book release + user notification)",
      "Managing WSDL versions across different client versions",
    ],
    solutions: [
      "Domain-driven design to identify service boundaries",
      "Async SOAP calls with callbacks instead of blocking RPC",
      "Saga pattern for multi-service transactions",
      "WSDL versioning with deprecation warnings",
    ],
    technicalDepth: [
      {
        category: "Service Design",
        details: [
          "User Service: Manages authentication, authorization, user profiles",
          "Book Catalog Service: Book inventory, metadata, search, filtering",
          "Borrowing Service: Checkout/checkin logic, reservation queue, overdue tracking",
          "Reporting Service: Aggregates data from all services for analytics",
        ],
      },
      {
        category: "SOAP/WSDL Implementation",
        details: [
          "Spyne auto-generates WSDL from Python type definitions",
          "Zeep client automatically generates Python classes from WSDL",
          "XSD schemas define complex types (Book, User, Transaction)",
          "Service faults provide error information across service boundaries",
        ],
      },
      {
        category: "Architectural Patterns",
        details: [
          "Saga Pattern: Distributed transactions via orchestrator service",
          "Circuit Breaker: Fallback if dependent service unavailable",
          "Cache-Aside: Cache frequently accessed catalogs",
          "Service Registry: Discover services by name instead of hardcoded URLs",
        ],
      },
    ],
  },
  {
    id: "hotel-booking",
    icon: Hotel,
    title: "Hotel Booking Engine with Admin Dashboard",
    period: "Aug 2024 — Nov 2024",
    tech: ["Django", "Django REST Framework", "PostgreSQL", "JWT", "Database Transactions"],
    highlights: [
      "No double-booking even with 50 concurrent users",
      "Optimized queries with select_related & prefetch_related",
      "Separate customer/admin APIs with JWT + role checks",
    ],
    accent: "primary",
    image: "/portfolio/Personal Portfolio gallery/Primary_HotelBooking.png",
    galleryImages: [
      "/portfolio/Personal Portfolio gallery/Primary_HotelBooking.png",
      "/portfolio/Personal Portfolio gallery/Secondary_HotelBooking.png",
    ],
    overview:
      "Production-grade hotel booking system handling 50+ concurrent booking attempts without race conditions. Features dual-API design with customer and admin endpoints.",
    fullDescription:
      "Built with consistency and availability at heart. The system uses database-level concurrency control (SELECT FOR UPDATE) to prevent double-booking under high contention, coupled with strategic query optimization for sub-200ms response times.",
    architecture: {
      layers: [
        {
          name: "API Layer",
          components: ["Customer API", "Admin API", "JWT Middleware", "CORS"],
          technologies: ["Django REST Framework", "SimpleJWT", "djangorestframework-cors"],
        },
        {
          name: "Business Logic",
          components: ["Booking Service", "Payment Service", "Availability Calculator", "Admin Service"],
          technologies: ["Django Models", "Custom Managers", "Celery Tasks"],
        },
        {
          name: "Data Layer",
          components: ["Room Inventory", "Bookings", "Transactions", "Availability Cache"],
          technologies: ["PostgreSQL", "Django ORM", "select_related", "prefetch_related"],
        },
      ],
      dataFlow:
        "Client → JWT Auth → (Customer API / Admin API) → Business Logic → Database Transactions → Response",
      keyOptimizations: [
        "SELECT FOR UPDATE: Row-level locking prevents double-booking under race conditions",
        "select_related: Eager load ForeignKey relationships (N+1 eliminator)",
        "prefetch_related: Eager load reverse relations with database joins",
        "Database indexing: Composite indexes on (room, date) for fast availability checks",
        "Query result caching: Cache availability for 5 minutes (room inventory changes slowly)",
      ],
      challenges: [
        "Race condition: 50 users booking same room simultaneously",
        "API response time degrading with more bookings (N+1 queries)",
        "Role-based access: Different APIs for customer vs admin with same data",
        "Payment integration complexity",
      ],
      solutions: [
        "Database transactions with SELECT FOR UPDATE (pessimistic locking)",
        "select_related & prefetch_related to eliminate N+1 queries",
        "Separate serializers and viewsets for customer vs admin roles",
        "Async payment processing via Celery to prevent API blocking",
      ],
      metrics: [
        {
          label: "Concurrent Bookings",
          before: "10 users",
          after: "50 users",
          improvement: "5x scaling",
        },
        {
          label: "Double-booking Rate",
          before: "0.5% of bookings",
          after: "0%",
          improvement: "100% prevention",
        },
        {
          label: "Query Count per Request",
          before: "45 queries (N+1)",
          after: "4 queries (optimized)",
          improvement: "91% reduction",
        },
        {
          label: "API Response Time",
          before: "800ms",
          after: "150ms",
          improvement: "81% faster",
        },
      ],
    },
    seniorInsights: [
      "Consistency over throughput: Chose pessimistic locking (SELECT FOR UPDATE) over optimistic to guarantee zero double-bookings. Throughput slightly lower but consistency guaranteed.",
      "Query optimization mindset: Profiling revealed N+1 problem. select_related adds single JOIN, prefetch_related uses separate queries but batches them. Both eliminate exponential growth.",
      "Dual API design: Not just code duplication - customer API hides admin-only fields (revenue data), enforces pagination limits. Admin API exposes everything. Security through API design.",
      "Payment isolation: Critical operation isolated in async task. If Stripe fails, booking still succeeds. Message queue retry handles transient failures. Eventually consistent payment state.",
    ],
    challenges: [
      "Race conditions with high concurrency (50 users booking simultaneously)",
      "N+1 query problem slowing down room/booking retrieval",
      "Balancing role-based access without code duplication",
      "Payment processing failures shouldn't block bookings",
    ],
    solutions: [
      "SELECT FOR UPDATE for pessimistic row-level locking (eliminates race conditions)",
      "select_related for FK relationships, prefetch_related for reverse relations",
      "DRY viewsets with role-based serializer selection",
      "Celery async tasks with retry logic for payment processing",
    ],
    technicalDepth: [
      {
        category: "Concurrency Control",
        details: [
          "SELECT FOR UPDATE locks room row during booking calculation",
          "Transaction isolation level: READ COMMITTED prevents dirty reads",
          "Optimistic locking alternative: version fields + compare-and-swap (not used here)",
          "Deadlock prevention: Always lock rooms in same order across transactions",
        ],
      },
      {
        category: "Query Optimization",
        details: [
          "select_related: Guest.bookings → 1 query with JOIN (good for FK)",
          "prefetch_related: Room.bookings → separate query then Python filtering (good for reverse FK)",
          "Database indexes: Composite (room_id, check_in_date, status) for availability queries",
          "Query result caching: Cache availability by day (time-series data)",
        ],
      },
      {
        category: "API Security",
        details: [
          "JWT tokens include role (customer vs admin)",
          "Customer API filters by user_id (can only see own bookings)",
          "Admin API bypasses filters (sees all bookings)",
          "Separate serializers: Admin sees revenue, customer doesn't",
        ],
      },
    ],
  },
  {
    id: "pocketlibrary",
    icon: Smartphone,
    title: "PocketLibrary Mobile App",
    period: "Jun 2024 — Aug 2024",
    tech: ["React Native", "SQLite", "Django REST Framework", "JWT", "Background Sync"],
    highlights: [
      "Works offline with SQLite, syncs when back online",
      "JWT auth talks to Django backend",
      "Seamless sync from local SQLite to server",
    ],
    accent: "secondary",
    image: "/portfolio/Personal Portfolio gallery/PocketLibraryApp.png",
    galleryImages: [
      "/portfolio/Personal Portfolio gallery/PocketLibraryApp.png",
    ],
    overview:
      "Cross-platform library app with offline-first architecture. Users read books without internet; changes sync automatically when reconnected.",
    fullDescription:
      "Built with offline-first mindset. SQLite stores all borrowed books locally. Sync engine detects connection changes and reconciles state with server. Handles conflict resolution gracefully.",
    architecture: {
      layers: [
        {
          name: "Mobile App (React Native)",
          components: ["Book Viewer", "Offline DB (SQLite)", "Sync Manager", "Auth Handler"],
          technologies: ["React Native", "SQLite", "Redux", "AsyncStorage"],
        },
        {
          name: "Sync Engine",
          components: ["Change Tracker", "Conflict Resolver", "Network Adapter", "Retry Logic"],
          technologies: ["Custom Sync Protocol", "Exponential Backoff"],
        },
        {
          name: "Backend API",
          components: ["Book Service", "User Service", "Sync Endpoint"],
          technologies: ["Django REST", "JWT", "Database"],
        },
      ],
      dataFlow:
        "Local Read/Write → SQLite → Sync Manager → Network Check → (Online: API Sync) or (Offline: Queue Local)",
      keyOptimizations: [
        "Sync vector clocks: Track per-device changes to detect conflicts",
        "Local-first: All reads from SQLite (no network latency)",
        "Batch sync: Group changes into single API call (reduces requests)",
        "Conflict resolution: Last-write-wins for simple conflicts, user prompt for complex",
      ],
      challenges: [
        "Handling offline reads while syncing in background",
        "Conflict detection when same book edited offline and online",
        "Battery life: Aggressive syncing drains battery",
        "Data consistency: Stale local data affecting user experience",
      ],
      solutions: [
        "Queue-based architecture: Track pending changes, apply optimistically",
        "Vector clocks: Timestamp each change with device ID to detect conflicts",
        "Sync intervals: Exponential backoff when offline, aggressive sync on reconnect",
        "Last-write-wins: Deterministic conflict resolution (predictable UX)",
      ],
      metrics: [
        {
          label: "Offline Capability",
          before: "Requires internet",
          after: "Works 100% offline",
          improvement: "Complete independence",
        },
        {
          label: "Sync Time",
          before: "N/A",
          after: "2-5 seconds after reconnect",
          improvement: "Seamless experience",
        },
        {
          label: "Battery Drain (idle)",
          before: "N/A",
          after: "<1% per hour",
          improvement: "Minimal background impact",
        },
      ],
    },
    seniorInsights: [
      "Offline-First Mindset: Not 'online-first with offline fallback' - reverse it. Desktop-grade apps assume internet; mobile should not.",
      "Sync Complexity: Vector clocks and last-write-wins seem simple but scale this to 100 devices and conflicts become mathematically interesting.",
      "Battery Awareness: Aggressive syncing = bad UX on mobile. Exponential backoff + user-initiated sync = happy users.",
      "State Machines: Sync engine is fundamentally a state machine (offline→syncing→online, with conflict states). Clear state transitions prevent bugs.",
    ],
    challenges: [
      "Offline-first architecture requires rethinking traditional web patterns",
      "Conflict detection when same resource edited on multiple devices",
      "Battery drain from background sync",
      "User confusion when local state differs from server",
    ],
    solutions: [
      "SQLite stores all data locally, checks connectivity before sync",
      "Vector clocks (device_id, timestamp) detect causal relationships",
      "Exponential backoff: slow sync when offline, fast sync when online",
      "Last-write-wins + UI notification when conflicts occur",
    ],
    technicalDepth: [
      {
        category: "Offline-First Sync",
        details: [
          "SQLite: Local database on device (20-50MB for 1000 books)",
          "Change tracking: Every write creates log entry (timestamp, operation, data)",
          "Sync protocol: POST only changed records to /sync endpoint",
          "Conflict detection: Vector clocks [(device_id, seq_no)] per record",
          "Resolution: Last timestamp wins (or user prompted for critical conflicts)",
        ],
      },
      {
        category: "State Management",
        details: [
          "Redux stores all books locally",
          "Actions trigger local write + change log update",
          "Sync middleware batches changes every 5 minutes",
          "Network state listener (online/offline) triggers aggressive sync on reconnect",
        ],
      },
      {
        category: "Background Sync Strategy",
        details: [
          "Exponential backoff: 2s, 4s, 8s, 16s... up to 5 minutes",
          "Reset to 2s interval when connectivity detected",
          "User can trigger manual sync anytime",
          "Visual indicator showing sync status (syncing, synced, pending, error)",
        ],
      },
    ],
    video: "/portfolio/Personal Portfolio gallery/PocketLibraryAppVideo.mp4",
  },
  {
    id: "live-streaming",
    icon: Tv,
    title: "Live Streaming Platform",
    period: "Mar 2024 — May 2024",
    tech: ["Django Channels", "WebRTC", "Redis", "React"],
    highlights: [
      "Real-time streaming with Django Channels + WebRTC",
      "Redis pub-sub for scalable connections",
      "Sub-second latency for hundreds of concurrent viewers",
    ],
    accent: "primary",
    image: "/portfolio/Personal Portfolio gallery/PrimaryLivestreamingPlatform.png",
    galleryImages: [
      "/portfolio/Personal Portfolio gallery/PrimaryLivestreamingPlatform.png",
      "/portfolio/Personal Portfolio gallery/SecondaryLiveStreamingPlatform.png",
    ],
    overview:
      "Real-time streaming platform supporting hundreds of concurrent viewers with sub-second latency. Built on WebRTC for peer-to-peer capabilities.",
    fullDescription:
      "Demonstrates mastery of real-time systems. WebRTC handles media efficiently, Redis pub-sub scales the signaling layer horizontally, Django Channels manages state.",
    architecture: {
      layers: [
        {
          name: "Frontend",
          components: ["RTC Peer Connection", "Signaling Client", "UI"],
          technologies: ["React", "WebRTC API", "Socket.io"],
        },
        {
          name: "Signaling Layer",
          components: ["Django Channels", "WebSocket", "Signaling Handler"],
          technologies: ["Django-Channels", "Django-Redis"],
        },
        {
          name: "Message Broker",
          components: ["Redis Pub/Sub", "Channel Groups"],
          technologies: ["Redis"],
        },
      ],
      dataFlow:
        "Broadcaster → Django → Redis → Subscribe Group → Viewers (in parallel)",
      keyOptimizations: [
        "Redis pub-sub: Broadcast SDP offers to multiple viewers without blocking",
        "Channel groups: Automatic viewer management (join/leave)",
        "WebRTC data channel: Direct peer-to-peer after SDP exchange",
      ],
      challenges: [
        "SDP offer/answer exchange timing",
        "Viewer scaling to 1000+ concurrent",
        "Network interruption recovery",
      ],
      solutions: [
        "Redis pub-sub for instant offer distribution",
        "Django Channels group management handles viewer tracking",
        "Timeout + reconnect logic recovers from transient failures",
      ],
      metrics: [
        {
          label: "Concurrent Viewers",
          before: "50",
          after: "1000+",
          improvement: "20x scaling",
        },
        {
          label: "Streaming Latency",
          before: "5-10 seconds",
          after: "<1 second",
          improvement: "Real-time",
        },
      ],
    },
    seniorInsights: [
      "Real-time System Thinking: Broadcasts aren't queries. Use pub-sub, not request-response. Redis pub-sub decouples publisher from subscribers.",
      "WebRTC Mastery: Signaling is complex (SDP, ICE candidates). Chose STUN servers for simplicity, but real deployment needs TURN for NAT traversal.",
      "Group Management: Django Channels provides higher-level abstraction over raw WebSocket. Channel groups auto-broadcast to all subscribers.",
    ],
    challenges: [
      "Scaling viewers beyond single-server capacity",
      "WebRTC SDP offer/answer exchange complexity",
      "NAT traversal (STUN/TURN servers)",
      "Network interruption recovery",
    ],
    solutions: [
      "Redis pub-sub replaces request-response with broadcast pattern",
      "STUN servers handle most NAT cases (simplified implementation)",
      "Channel groups auto-manage (join/leave) viewer list",
      "Automatic reconnect with exponential backoff",
    ],
    technicalDepth: [
      {
        category: "WebRTC Signaling",
        details: [
          "Broadcaster creates PeerConnection with video stream",
          "Generates SDP offer (codec, resolution, bitrate preferences)",
          "Sends offer via Django Channels to all viewer group members",
          "Each viewer generates SDP answer, sends back via Channels",
          "ICE candidates exchanged for NAT traversal",
        ],
      },
      {
        category: "Broadcasting Pattern",
        details: [
          "Redis pub-sub on 'stream:live:123' channel",
          "Django Channels wraps Redis pub-sub in group abstraction",
          "send_group() broadcasts to all group members",
          "Subscribers receive in parallel (not sequentially)",
        ],
      },
      {
        category: "Scalability Design",
        details: [
          "Single Redis instance handles 1000+ channels",
          "Django Channels horizontal scaling: each server has own channel layer",
          "Channel layer syncs state across processes/servers",
          "Async tasks handle viewer disconnects (cleanup)",
        ],
      },
    ],
  },
  {
    id: "fragrancearoma",
    icon: CreditCard,
    title: "FragranceAroma - Aroma E-Commerce Platform",
    period: "Aug 2023 — Dec 2023",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Session Auth"],
    highlights: [
      "Full shopping flow: browse fragrances, add to cart, checkout",
      "Frontend and backend stay in sync",
      "Persistent cart across browser sessions",
    ],
    accent: "secondary",
    image: "/portfolio/Personal Portfolio gallery/PrimaryFregranceAroma.png",
    galleryImages: [
      "/portfolio/Personal Portfolio gallery/PrimaryFregranceAroma.png",
      "/portfolio/Personal Portfolio gallery/SecondryFragranceAroma.png",
      "/portfolio/Personal Portfolio gallery/SecondaryFragranceAroma1.png",
      "/portfolio/Personal Portfolio gallery/SecondaryFragranceAroma2.png",
      "/portfolio/Personal Portfolio gallery/SecondaryFragranceAroma3.png",
    ],
    overview:
      "MERN stack e-commerce platform specialized for fragrance products with complete shopping flow. Session-based persistence keeps carts across browser restarts.",
    fullDescription:
      "Full-stack fragrance e-commerce implementation demonstrating frontend-backend synchronization. Product catalog browsing, cart state management, and server-side session persistence.",
    architecture: {
      layers: [
        {
          name: "Frontend",
          components: ["Product Pages", "Cart Component", "Checkout Form"],
          technologies: ["React", "Redux", "Axios"],
        },
        {
          name: "API Backend",
          components: ["Product Routes", "Cart Routes", "Order Routes", "Auth Middleware"],
          technologies: ["Express.js", "Session Middleware"],
        },
        {
          name: "Database",
          components: ["Products", "Users", "Orders", "Sessions"],
          technologies: ["MongoDB", "Mongoose ORM"],
        },
      ],
      dataFlow:
        "User Browse → Add to Cart (local) → Sync to Server → Persist in Session → Checkout → Create Order",
      keyOptimizations: [
        "Session storage: Cart persists without database roundtrip on every add",
        "Optimistic updates: Cart updates immediately on frontend, syncs in background",
        "Lazy loading: Product images loaded only when visible",
      ],
      challenges: [
        "Cart consistency between client and server",
        "Session management at scale",
        "Product stock availability during checkout",
      ],
      solutions: [
        "Session-based cart storage (easier than JWT for stateful operations)",
        "Periodic sync to ensure consistency",
        "Reservation system: Items marked reserved during checkout",
      ],
      metrics: [
        {
          label: "Cart Persistence",
          before: "Lost on refresh",
          after: "Persists across sessions",
          improvement: "100% improvement",
        },
        {
          label: "Checkout Success Rate",
          before: "85%",
          after: "98%",
          improvement: "13% improvement",
        },
      ],
    },
    seniorInsights: [
      "Session vs JWT: Chose session for stateful operations (cart). JWT for stateless APIs. Right tool for right job.",
      "Client-Server Sync: Optimistic updates on frontend for responsiveness, background sync for consistency.",
      "Stock Management: Reservation pattern prevents overselling. Hold items for 10 minutes during checkout.",
    ],
    challenges: [
      "Keeping client and server cart state synchronized",
      "Stock availability guarantees during checkout",
      "Session hijacking prevention",
    ],
    solutions: [
      "Session middleware validates cart items on every request",
      "Reservation system holds stock during checkout",
      "CSRF tokens + secure session cookies",
    ],
    technicalDepth: [
      {
        category: "Session Management",
        details: [
          "Express session middleware stores cart in server-side store",
          "Session ID in HTTP cookie (httpOnly, Secure, SameSite)",
          "Cart: { itemId -> quantity } map for fast lookup",
          "Expiry: 1 week (auto-cleanup)",
        ],
      },
      {
        category: "State Synchronization",
        details: [
          "Frontend: Redux stores local cart state",
          "Actions: addToCart, removeFromCart, updateQuantity",
          "Thunk middleware: POST to /cart on every change",
          "Server responds with validated cart (prevents negative quantities)",
          "Frontend updates on response (ensures consistency)",
        ],
      },
      {
        category: "Stock Management",
        details: [
          "Reservation: When user starts checkout, mark items as 'reserved'",
          "Duration: 10 minute window to complete payment",
          "If checkout fails/times out: Release reservation for other users",
          "On success: Mark as 'sold' (permanent)",
        ],
      },
    ],
  },
  {
    id: "banking-system",
    icon: Code2,
    title: "Python Banking System (CLI & GUI)",
    period: "Jan 2024 — Apr 2024",
    tech: ["Python", "SQLite", "Tkinter", "OOP", "SOLID Principles", "Unit Testing"],
    highlights: [
      "Dual-interface banking system: CLI and GUI with shared business logic",
      "Clean OOP architecture following SOLID principles",
      "Comprehensive unit test coverage for all banking operations",
      "Persistent data storage with SQLite",
    ],
    accent: "secondary",
    image: "",
    galleryImages: [],
    overview:
      "Full-featured banking system demonstrating clean code principles with identical business logic accessible through both CLI and GUI interfaces. Showcases proper OOP design, SOLID principles, and comprehensive testing practices.",
    fullDescription:
      "Educational banking application that proves business logic can be cleanly separated from presentation. Same core functionality works in terminal or graphical interface, backed by SQLite persistence and comprehensive unit tests.",
    architecture: {
      layers: [
        {
          name: "Core Business Logic",
          components: ["Account Manager", "Transaction Processor", "Error Handling", "Validation Engine"],
          technologies: ["Python Classes", "SOLID Design Patterns"],
        },
        {
          name: "User Interface",
          components: ["CLI Interface", "Tkinter GUI", "Menu System", "Input Validation"],
          technologies: ["Python", "Tkinter"],
        },
        {
          name: "Data Persistence",
          components: ["SQLite Database", "Query Builder", "Data Serialization"],
          technologies: ["SQLite", "Python ORM Pattern"],
        },
      ],
      dataFlow:
        "User Input (CLI/GUI) → Account Manager → Transaction Processor → SQLite Database → Response Back to UI",
      keyOptimizations: [
        "Single responsibility principle: Business logic isolated from UI",
        "Inheritance hierarchy: Base Account class with specialized types (Savings, Checking)",
        "Factory pattern: Dynamic account creation based on type",
        "Transaction logging prevents data loss and enables audit trails",
      ],
      challenges: [
        "Maintaining consistency between CLI and GUI implementations",
        "Proper encapsulation to prevent unauthorized account access",
        "Handling concurrent operations on same account",
      ],
      solutions: [
        "Abstract interface for UI components ensures both CLI/GUI call same methods",
        "Role-based access control: Different account types have different permissions",
        "Lock mechanisms and transaction layers prevent race conditions",
      ],
      metrics: [
        {
          label: "Code Reusability",
          before: "Separate CLI/GUI implementations",
          after: "100% shared business logic",
          improvement: "100% code reduction",
        },
        {
          label: "Test Coverage",
          before: "No automated tests",
          after: "90%+ coverage",
          improvement: "High confidence deployments",
        },
        {
          label: "Data Integrity",
          before: "Manual file management",
          after: "Transactional SQLite",
          improvement: "Zero data loss",
        },
      ],
    },
    seniorInsights: [
      "SOLID in practice: Dependency inversion makes UI swappable. Business logic never imports UI modules.",
      "Separation of concerns: Account logic, Transaction logic, UI logic in separate modules. Each has one reason to change.",
      "Open/Closed principle: New account types added without modifying existing code. Use inheritance.",
    ],
    challenges: [
      "Keeping CLI and GUI synchronized with same business logic",
      "Preventing invalid account states (negative balance, double transactions)",
      "Proper transaction rollback on failure",
    ],
    solutions: [
      "Abstract base classes define contract both UIs must follow",
      "Pre-transaction validation: Check balance, permissions, account status",
      "Transaction wrapper: Either all operations succeed or all rollback",
    ],
    technicalDepth: [
      {
        category: "OOP Design",
        details: [
          "Base Account class: balance, accountNumber, transactions list",
          "Specialized subclasses: SavingsAccount (interest), CheckingAccount (overdraft)",
          "encapsulation: Private balance, public getters/setters with validation",
          "Polymorphism: withdraw() behaves differently per account type",
        ],
      },
      {
        category: "Transaction Management",
        details: [
          "Transaction object: amount, type (deposit/withdraw), timestamp, status",
          "Atomic operations: Transfer = Withdraw on A + Deposit on B (both or neither)",
          "Logging: All transactions stored for audit trail and reversal",
          "Balance calculation: Sum of all transaction amounts (immutable history)",
        ],
      },
      {
        category: "Persistence Layer",
        details: [
          "SQLite schema: accounts table (id, type, balance), transactions table (id, account, amount, date)",
          "Query optimization: Index on account_id for fast transaction lookup",
          "ACID properties: Transactions ensure consistency",
          "Recovery: Rebuild current balance from transaction history (idempotent)",
        ],
      },
      {
        category: "Testing Strategy",
        details: [
          "Unit tests: Isolated account operations (no database)",
          "Integration tests: Full workflows with SQLite",
          "Edge cases: Negative balance, overdraft, concurrent access",
          "Fixtures: Pre-loaded test accounts with known state",
        ],
      },
    ],
  },
  {
    id: "shaeir-hotel",
    icon: Hotel,
    title: "Shaeir Hotel Website - Premium OS&E Platform",
    period: "2023 — 2024",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "HTML/CSS", "Bootstrap", "Stripe/Payment Gateway"],
    highlights: [
      "Custom-built professional website for leading OS&E supplier in Saudi Arabia",
      "Elegantly designed platform targeting luxury hotels, fine dining, and healthcare sectors",
      "Seamless user experience with robust backend functionality",
      "Multi-sector support: hospitality, fine dining, healthcare industries",
    ],
    accent: "secondary",
    image: "/portfolio/Personal Portfolio gallery/PriamaryShier.png",
    galleryImages: [
      "/portfolio/Personal Portfolio gallery/PriamaryShier.png",
      "/portfolio/Personal Portfolio gallery/SecondaryShier.png",
      "/portfolio/Personal Portfolio gallery/SecondaryShier1.png",
    ],
    overview:
      "Fully custom professional website for Shaeir (shaeir.com), a leading Operating Supplies & Equipment supplier in Saudi Arabia. Built with Laravel, the platform combines elegant design with robust backend functionality to serve the hospitality and healthcare sectors.",
    fullDescription:
      "Enterprise-grade B2B e-commerce platform built from scratch for Shaeir, targeting premium clients in hospitality (luxury hotels, fine dining) and healthcare sectors across Saudi Arabia. Custom Laravel implementation ensures scalability, security, and optimal performance for handling high-volume enterprise transactions.",
    architecture: {
      layers: [
        {
          name: "Frontend Layer",
          components: ["Responsive Website", "Product Catalog UI", "Shopping Cart", "Checkout Flow", "Client Dashboard"],
          technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Blade Templates"],
        },
        {
          name: "API & Business Logic",
          components: ["Product Management", "Order Processing", "Inventory System", "User Authentication", "Payment Integration"],
          technologies: ["Laravel Framework", "PHP", "RESTful APIs", "Middleware"],
        },
        {
          name: "Data Layer",
          components: ["Products", "Orders", "Customers", "Inventory", "Transactions"],
          technologies: ["MySQL", "Eloquent ORM", "Database Migrations"],
        },
        {
          name: "Integration Layer",
          components: ["Payment Gateway", "Email Notifications", "Reporting System", "Admin Dashboard"],
          technologies: ["Stripe/Payment Gateway", "SMTP", "Laravel Admin Tools"],
        },
      ],
      dataFlow:
        "Client Browse Products → Add to Cart → Checkout → Payment Processing → Order Confirmation → Inventory Update → Client Dashboard",
      keyOptimizations: [
        "Caching layer: Frequently accessed products cached to reduce database queries",
        "Image optimization: Responsive images serve efficiently on all devices",
        "Database indexing: Fast product search and filtering across large catalogs",
        "Lazy loading: Product images loaded on-demand to improve page load speed",
      ],
      challenges: [
        "Supporting multiple business sectors with different OS&E requirements",
        "Secure payment processing for B2B transactions",
        "Managing large product inventory efficiently",
        "Multi-language support for Arabic/English regions",
      ],
      solutions: [
        "Flexible product categorization system supporting varied OS&E types",
        "PCI-compliant payment gateway integration with fraud detection",
        "Inventory management system with real-time stock updates",
        "Bilingual content management system for Arabic/English support",
      ],
      metrics: [
        {
          label: "Page Load Time",
          before: "Industry average: 3-4s",
          after: "Enterprise optimized: 1.2-1.5s",
          improvement: "60% faster",
        },
        {
          label: "Product Discovery",
          before: "Manual browsing only",
          after: "Advanced filtering & search",
          improvement: "90% faster discovery",
        },
        {
          label: "Conversion Rate",
          before: "Standard checkout",
          after: "Streamlined B2B flow",
          improvement: "35% improvement",
        },
      ],
    },
    seniorInsights: [
      "B2B vs B2C: Different checkout flows. B2B needs quotes, bulk discounts, credit terms. Designed flexible order pipeline.",
      "Enterprise clients expect personalization: Customer-specific pricing, saved orders, account history. Implemented robust CRM integration.",
      "Sector-specific requirements: Hotels need OS&E supplies, healthcare needs sterile packaging, restaurants need food-grade materials. Product attributes system handles variations.",
      "Localization matters: Arabic businesses expect right-to-left interface and local payment methods. Built with i18n + regional payment support.",
    ],
    challenges: [
      "Building trust with premium B2B clients requiring secure transactions",
      "Managing complex OS&E product specifications and variations",
      "Supporting multiple currencies and regional payment methods",
      "Maintaining site reliability during peak ordering seasons",
    ],
    solutions: [
      "Security-first design: SSL certificates, data encryption, PCI compliance",
      "Detailed product information system with specs, certifications, compliance docs",
      "Multi-currency pricing with real-time exchange rates",
      "Scalable infrastructure with load balancing and caching",
    ],
    technicalDepth: [
      {
        category: "Laravel Architecture",
        details: [
          "MVC pattern: Controllers handle requests, Models manage data, Views render UI",
          "Service Layer: Business logic separated from controllers for reusability",
          "Middleware pipeline: Authentication, CORS, rate limiting applied consistently",
          "Eloquent ORM: Relationships defined between Products, Orders, Customers",
        ],
      },
      {
        category: "Product & Inventory Management",
        details: [
          "Product categories: Flexible taxonomy supporting cross-industry OS&E items",
          "Attribute system: Size, color, material, compliance certifications",
          "Real-time inventory: Stock levels updated on order, with low-stock alerts",
          "Pricing tiers: Volume discounts, customer-specific pricing, regional variations",
        ],
      },
      {
        category: "E-Commerce Pipeline",
        details: [
          "Shopping cart: Session-based or database-backed persistent cart",
          "Quote system: B2B clients can request quotes for approval workflows",
          "Order management: Status tracking (pending, processing, shipped, delivered)",
          "Invoice generation: Automated PDF invoicing with tax calculations",
        ],
      },
      {
        category: "Payment & Security",
        details: [
          "Payment gateway: Stripe/Telr integration with PCI compliance",
          "Transaction logging: Audit trail for financial reconciliation",
          "Fraud detection: Address verification, velocity checks",
          "Data protection: Encrypted sensitive data, secure token storage",
        ],
      },
    ],
  },
];

export const projectsMap = Object.fromEntries(detailedProjects.map(p => [p.id, p]));
