export default function DemoVideoPage({ params }: { params: { videoUrl: string } }) {
  const videoUrl = decodeURIComponent(params.videoUrl);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="w-full max-w-4xl">
        <video
          src={videoUrl}
          controls
          className="w-full rounded-lg shadow-2xl"
          style={{ maxHeight: '80vh' }}
          autoPlay
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
