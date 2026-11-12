export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  category: 'DevOps' | 'AI/ML' | 'Cloud' | 'Systems';
  tags: string[];
  author: string;
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'frameread-offline-ai-video-analysis-qwen2vl',
    title: 'FrameRead: Building a 100% Offline AI Video Analysis Pipeline with Whisper and Qwen2-VL',
    date: '2026-03-10',
    readTime: '6 min read',
    excerpt: 'An architectural deep dive into FrameRead: extracting synchronized audio transcriptions and scene-change visual frames locally with Qwen2-VL and Whisper—zero cloud APIs, 100% privacy.',
    category: 'AI/ML',
    tags: ['FrameRead', 'Vision LLM', 'Whisper', 'Qwen2-VL', 'Python', 'Local AI'],
    author: 'Pratham Solanki',
    content: `
## Why Offline Video Intelligence Matters

Analyzing long-form video files typically requires piping gigabytes of proprietary footage into commercial cloud APIs. In creating **FrameRead**, the goal was absolute privacy: build an end-to-end multimodal pipeline capable of turning any arbitrary video into a structured, multi-page written brief entirely on consumer local hardware.

Pratham Solanki is a Software Developer specializing in DevOps, AI/ML, and Cloud Engineering who focuses on practical edge-AI pipelines.

### The FrameRead Execution Pipeline

FrameRead operates across four distinct, modular stages:

1. **Audio Extraction & Whisper Transcription:** Extracting clean audio streams with FFmpeg and running local OpenAI Whisper inference to generate timestamped text chunks.
2. **Scene-Change Frame Sampling:** Rather than naively sampling every N-th frame, FrameRead computes frame-to-frame pixel delta histograms to extract only meaningful scene transitions, drastically reducing inference overhead.
3. **Local Vision Inference via Qwen2-VL:** Running quantized Qwen2-VL models via Hugging Face to generate granular visual descriptions for each sampled keyframe.
4. **Master Synthesis & Evidence-Backed Q&A:** A local language model fuses the timestamped audio and visual observations into a coherent narrative summary. Users can ask targeted questions and receive answers cited with exact video timestamps.

\`\`\`python
# FrameRead scene extraction & visual analysis excerpt
class FrameReadPipeline:
    def __init__(self, vision_model="Qwen/Qwen2-VL-7B-Instruct", whisper_size="base"):
        self.transcriber = load_whisper_engine(whisper_size)
        self.vision_model = load_local_vlm(vision_model)

    def analyze_video(self, video_path: str, query: str = None):
        # 1. Extract audio & transcribe
        audio_transcript = self.transcriber.extract_and_transcribe(video_path)
        
        # 2. Extract scene-change keyframes
        keyframes = extract_scene_keyframes(video_path, threshold=0.35)
        
        # 3. Local VLM visual descriptions
        visual_logs = self.vision_model.describe_frames(keyframes)
        
        # 4. Synthesize master summary with cross-modal alignment
        return synthesize_report(audio_transcript, visual_logs, user_query=query)
\`\`\`

### Key Benchmarks & Local Optimization

By coupling scene-change detection with int4/int8 quantization, FrameRead processes a 10-minute video in under 3 minutes on consumer GPUs with zero outbound network calls.
    `
  },
  {
    slug: 'openseal-fastapi-open-source-docusign-alternative',
    title: 'OpenSeal: Architecting an Open-Source DocuSign Alternative with FastAPI and Canvas Signing',
    date: '2026-02-18',
    readTime: '5 min read',
    excerpt: 'How OpenSeal was engineered: a lightweight, self-hosted document signing web application built with FastAPI and Vanilla JS featuring dynamic PDF coordinate placement and instant link sharing.',
    category: 'Systems',
    tags: ['OpenSeal', 'FastAPI', 'Python', 'PDF Coordinates', 'Canvas API', 'Self-Hosted'],
    author: 'Pratham Solanki',
    content: `
## Why Digital Document Signing Shouldn't Require Enterprise SaaS

Commercial document signing platforms impose steep monthly subscriptions, vendor lock-in, and uncertain data retention policies. **OpenSeal** was built on a simple premise: create an open-source, easily tweakable signing application using Python (FastAPI) and vanilla browser APIs.

### How OpenSeal Works Under the Hood

1. **Dashboard Command Center:** The core landing hub displays document status (Pending vs. Signed) and tracks outgoing signing requests.
2. **Interactive Coordinate Placement:** When uploading a PDF on \`/new-request\`, the application renders PDF page viewports using PDF.js. Senders drag and position an interactive signature bounding box directly over the document.
3. **Dynamic UUID Sign URLs:** Upon saving, OpenSeal generates a secure, unique signing URL (e.g., \`openseal.prthm.xyz/sign/{docId}\`) and automatically copies it to the sender's clipboard.
4. **Mobile & Desktop Canvas Signing:** The signer navigates to the sign page, clicks the designated signature bounding box, draws their signature on a responsive HTML5 canvas, and confirms. OpenSeal burns the signature image into the target PDF at the exact recorded coordinates.

\`\`\`python
# OpenSeal FastAPI route excerpt
@app.post("/api/v1/documents/{doc_id}/sign")
async def finalize_signature(doc_id: str, payload: SignatureSubmission):
    doc = get_document_by_id(doc_id)
    if not doc or doc.is_signed:
        raise HTTPException(status_code=400, detail="Invalid document or already signed")

    # Burn drawn canvas signature onto PDF at recorded coordinates
    stamped_pdf_path = stamp_pdf_signature(
        original_pdf=doc.file_path,
        signature_base64=payload.signature_data_url,
        page_num=doc.box_coords.page,
        x=doc.box_coords.x,
        y=doc.box_coords.y,
        width=doc.box_coords.width,
        height=doc.box_coords.height
    )
    
    doc.mark_as_signed(stamped_pdf_path)
    return {"status": "success", "download_url": f"/download/{doc_id}"}
\`\`\`

OpenSeal is live at [openseal.prthm.xyz](https://openseal.prthm.xyz) with open-source code on [GitHub](https://github.com/pr1hm/openseal).
    `
  },
  {
    slug: 'conlatus-ai-proctored-technical-screening',
    title: 'Conlatus AI: Autonomous Multi-Agent Technical Screening & Computer Vision Proctoring',
    date: '2026-01-22',
    readTime: '7 min read',
    excerpt: 'An architectural breakdown of Conlatus AI: real-time conversational technical interviews, Safe Exam Browser (SEB) lockdown gates, and real-time computer vision proctoring for high-scale hiring.',
    category: 'AI/ML',
    tags: ['Conlatus', 'Safe Exam Browser', 'Computer Vision', 'WebSockets', 'AI Proctoring'],
    author: 'Pratham Solanki',
    content: `
## Reimagining the Technical Interview at Scale

Conducting live engineering interviews across hundreds of candidates creates severe bottlenecks for hiring teams. **Conlatus AI** was engineered as an autonomous, full-stack examination and screening platform that combines real-time technical dialogue with rigorous academic proctoring.

### Multi-Layer Integrity & Examination Architecture

1. **Safe Exam Browser (SEB) Integration:** For high-stakes evaluations, Conlatus enforces strict browser gates requiring candidates to launch through SEB, preventing tab-switching, virtual machine emulation, or secondary browser processes.
2. **Real-Time Computer Vision Proctoring:** Browser-side video streams evaluate gaze direction, head orientation, multi-face presence, and ambient background anomalies without transmitting uncompressed raw video streams to backend servers.
3. **Adaptive Technical Dialogue:** Rather than serving static multi-choice quizzes, Conlatus conducts contextual conversational interviews using streaming LLM agents over WebSockets. The AI agent challenges candidate reasoning, prompts for code optimization, and dynamically adjusts difficulty based on candidate proficiency.

\`\`\`typescript
// Conlatus candidate session proctoring heartbeat
export async function handleProctoringTelemetry(
  sessionId: string,
  event: ProctoringAnomalyEvent
) {
  const session = await db.interviewSession.findUnique({ where: { id: sessionId } });
  if (!session) throw new Error("Active session not found");

  if (event.type === "MULTIPLE_FACES_DETECTED" || event.type === "EXTENDED_GAZE_AWAY") {
    await db.proctoringLog.create({
      data: {
        sessionId,
        severity: "WARNING",
        timestamp: new Date(),
        anomalyDetails: event.details,
      }
    });
  }
}
\`\`\`

Conlatus showcases how autonomous agent coordination and client-side computer vision can unlock scalable, tamper-resistant candidate screening.
    `
  },
  {
    slug: 'netsol-android-embedded-nanohttpd-webserver',
    title: 'Building In-Process Android Embedded Webservers with NanoHTTPD at Netsol IT Solutions',
    date: '2025-12-14',
    readTime: '5 min read',
    excerpt: 'Production lessons from an engineering internship at Netsol IT Solutions: implementing in-process embedded NanoHTTPD servers inside Android client runtimes for offline peer synchronization.',
    category: 'Systems',
    tags: ['Android', 'NanoHTTPD', 'Embedded Systems', 'Networking', 'Java', 'IoT'],
    author: 'Pratham Solanki',
    content: `
## Embedded Networking Inside Android Client Runtimes

During an engineering internship at Netsol IT Solutions, an architectural challenge presented itself: how to expose low-latency telemetry and configuration APIs from an Android device to local hardware peers when public internet connectivity is unavailable or restricted.

The solution was embedding **NanoHTTPD**, a miniature Java HTTP server framework that runs directly inside the Android application process lifecycle.

### Core Implementation Challenges & Solutions

- **Foreground Service Lifecycle:** Modern Android OS versions aggressively throttle background threads to preserve battery life. Running NanoHTTPD reliably required binding the HTTP daemon to an Android sticky foreground service with a persistent system notification.
- **Multithreading & Socket Concurrency:** NanoHTTPD uses a thread-per-request model. Proper connection timeouts and keep-alive limits were tuned to prevent file-descriptor exhaustion on constrained hardware.
- **Network Service Discovery (mDNS):** Pairing the embedded HTTP server with Android Network Service Discovery (NSD) allowed peer devices on the same local network to auto-discover the Android endpoint without manual IP entry.

\`\`\`java
public class LocalTelemetryServer extends NanoHTTPD {
    public LocalTelemetryServer(int port) {
        super(port);
    }

    @Override
    public Response serve(IHTTPSession session) {
        if ("/api/v1/telemetry".equals(session.getUri())) {
            String jsonPayload = DeviceTelemetryCollector.captureSnapshotJson();
            return newFixedLengthResponse(Response.Status.OK, "application/json", jsonPayload);
        }
        return newFixedLengthResponse(Response.Status.NOT_FOUND, MIME_PLAINTEXT, "Route not found");
    }
}
\`\`\`

Embedding in-process webservers within client devices remains an effective strategy for edge computing, local IoT management, and offline peer synchronization.
    `
  }
];
