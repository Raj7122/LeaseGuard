# LeaseGuard 🏠

**AI-Powered Lease Analysis & Legal Compliance Platform**

LeaseGuard is a cutting-edge web application that leverages artificial intelligence to analyze residential and commercial lease agreements, automatically detect potential legal violations, and provide intelligent legal guidance through conversational AI.

## 🎯 Problem Statement

Renting a property involves complex legal documents that most tenants struggle to understand. Traditional lease review processes are:
- **Time-consuming**: Manual review takes hours of legal expertise
- **Error-prone**: Human oversight can miss critical violations
- **Expensive**: Legal consultation costs $200-500 per review
- **Inaccessible**: Legal expertise not available to most renters

LeaseGuard solves these problems by providing:
- **Instant Analysis**: AI-powered lease review in seconds
- **Violation Detection**: Automatic identification of problematic clauses
- **Legal Guidance**: Conversational AI for lease-related questions
- **Compliance Monitoring**: Real-time tracking of lease violations

## 🏗️ Technical Architecture

### **Frontend Stack**
- **Framework**: Next.js 15.4.4 with React 19.1.0
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS v4 with modern design system
- **State Management**: React hooks with custom state management
- **UI Components**: Custom component library with dark/light mode support

### **Backend Stack**
- **Runtime**: Node.js with Next.js API routes
- **Authentication**: Clerk.js for secure user management
- **Database**: Supabase (PostgreSQL) for structured data storage
- **Caching**: Redis for high-performance data caching and vector search
- **AI Integration**: Google Gemini AI for natural language processing

### **Core Services**
- **Document Processor**: PDF parsing with Tesseract.js OCR
- **AI Engine**: Gemini AI for clause extraction and legal analysis
- **Search Engine**: Hybrid semantic + vector search with Redis
- **Analytics**: Real-time performance and error tracking
- **Security**: OWASP-compliant security middleware

### **Data Flow Architecture**
```
User Upload → PDF Processing → AI Analysis → Redis Caching → Database Storage → API Response
     ↓
Chat Interface → Semantic Search → AI Context → Response Generation → User Interface
```

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- Redis 7+ (with Redis Stack for vector search)
- Supabase account
- Google Cloud account (for Gemini AI)

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/leaseguard.git
   cd leaseguard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env.local` file in the root directory:

   ```bash
   # Copy the template
   cp env.production.template .env.local
   ```

   **Required Environment Variables:**

   ```env
   # Redis Configuration
   REDIS_URL=redis://localhost:6379
   REDIS_PASSWORD=your_redis_password

   # Google Gemini AI
   GEMINI_API_KEY=your_gemini_api_key
   GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key

   # Supabase Configuration
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

   # Session Security
   SESSION_SECRET=your_32_character_random_secret

   # CORS Configuration
   ALLOWED_ORIGINS=http://localhost:3000,https://yourdomain.com
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔑 API Key Setup

### **Google Gemini AI**
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Add to `.env.local` as `GEMINI_API_KEY`

### **Supabase Database**
1. Create a new project at [supabase.com](https://supabase.com)
2. Get your project URL and API keys
3. Add to `.env.local` as `SUPABASE_URL` and `SUPABASE_ANON_KEY`

### **Redis Setup**
1. **Local Development**: Install Redis locally
   ```bash
   # macOS
   brew install redis
   brew services start redis

   # Ubuntu/Debian
   sudo apt-get install redis-server
   sudo systemctl start redis-server
   ```

2. **Production**: Use Redis Cloud or self-hosted Redis with Redis Stack

## 🔄 Redis Integration

LeaseGuard leverages Redis for multiple critical functions:

### **Vector Search & Semantic Caching**
- **Clause Similarity**: Stores 768-dimensional embeddings for lease clauses
- **Semantic Matching**: Enables intelligent clause comparison and search
- **Cache Warming**: Pre-loads frequently accessed lease data

### **Real-time Data Processing**
- **Event Streams**: Tracks document processing events and user interactions
- **Time Series Data**: Monitors application performance and user behavior
- **Command Storage**: Maintains audit trail of all system operations

### **Performance Optimization**
- **Session Caching**: Stores user session data and conversation history
- **Search Results**: Caches frequently requested search queries
- **Document Metadata**: Stores processed lease information for quick access

### **Redis Commands Used**
```bash
# Vector Search
FT.CREATE lease_clauses ON JSON PREFIX 1 lease: SCHEMA $.clause_text AS text TEXT $.embedding AS embedding VECTOR FLOAT32 768

# Time Series
TS.CREATE user_activity
TS.ADD user_activity * 1

# Streams
XADD processing_events * user_id 123 file_name lease.pdf status processing
```

## 📱 Features

### **Core Functionality**
- **Document Upload**: Drag & drop PDF lease agreements
- **AI Analysis**: Automatic clause extraction and violation detection
- **Legal Chat**: Conversational AI for lease questions
- **Violation Tracking**: Severity-based violation categorization
- **Search & Discovery**: Semantic search across lease documents

### **Advanced Capabilities**
- **Multi-language Support**: English, Spanish, French, German
- **Real-time Processing**: Live document analysis with progress tracking
- **Performance Analytics**: Comprehensive monitoring and metrics
- **Security Features**: OWASP-compliant security middleware
- **Responsive Design**: Mobile-first, accessible interface

## 🛠️ Development

### **Available Scripts**
```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### **Project Structure**
```
src/
├── app/                    # Next.js app router
│   ├── api/               # API endpoints
│   │   ├── analytics/     # Performance monitoring
│   │   ├── chat/          # AI conversation
│   │   ├── upload/        # Document processing
│   │   └── health/        # System health checks
│   └── page.tsx           # Main application
├── components/             # React components
│   └── ui/                # UI component library
├── hooks/                  # Custom React hooks
├── lib/                    # Core services
│   ├── redis.ts           # Redis client & operations
│   ├── gemini.ts          # AI integration
│   ├── document-processor.ts # PDF processing
│   └── security-config.ts # Security middleware
```

### **Key Technologies**
- **PDF Processing**: `pdfjs-dist` + `tesseract.js` for OCR
- **AI Integration**: `@google/generative-ai` for Gemini
- **Database**: `@supabase/supabase-js` for PostgreSQL
- **Caching**: `redis` for high-performance data storage
- **Authentication**: `@clerk/nextjs` for user management

## 🔒 Security Features

### **OWASP Top 10 Compliance**
- **Injection Protection**: Input validation and sanitization
- **Authentication**: Secure session management with Clerk
- **Data Protection**: Encryption at rest and in transit
- **CORS Security**: Configurable origin restrictions
- **Rate Limiting**: DDoS protection and abuse prevention

### **Security Middleware**
- **Request Validation**: Comprehensive input sanitization
- **Header Security**: Security headers (CSP, HSTS, etc.)
- **File Upload Security**: Malicious file detection
- **Monitoring**: Real-time security event tracking

## 📊 Performance & Monitoring

### **Analytics Endpoints**
- `/api/analytics/performance` - Performance metrics
- `/api/analytics/error` - Error tracking and analysis
- `/api/analytics/resilience` - System health monitoring

### **Health Checks**
- `/api/health` - Comprehensive system status
- Redis connectivity verification
- AI service availability
- Database connection status

## 🚀 Deployment

### **Production Build**
```bash
npm run build
npm run start
```

### **Docker Deployment**
```bash
# Build image
docker build -t leaseguard .

# Run container
docker run -p 3000:3000 --env-file .env.production leaseguard
```

### **Environment Variables**
- Copy `env.production.template` to `.env.production`
- Fill in production values
- Ensure all secrets are properly secured

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [docs.leaseguard.com](https://docs.leaseguard.com)
- **Issues**: [GitHub Issues](https://github.com/yourusername/leaseguard/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/leaseguard/discussions)

## 🙏 Acknowledgments

- **Google Gemini AI** for advanced language processing
- **Supabase** for scalable database infrastructure
- **Redis** for high-performance caching and search
- **Next.js Team** for the amazing React framework
- **Open Source Community** for the tools that make this possible

---

**Built with ❤️ for renters everywhere**
