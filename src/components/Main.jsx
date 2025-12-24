export default function Main(props) {
    const { data } = props

    if (!data) return null

    const isVideo = data.media_type === 'video' || (data.media_type === 'other' && data.url?.includes('youtube.com'))
    const isDirectVideo = data.url?.endsWith('.mp4') || data.url?.endsWith('.mov')
    const mediaUrl = data.hdurl || data.url || data.thumbnail_url

    return (
        <div className="imgContainer">
            {!mediaUrl ? (
                <div className="noMedia">
                    <p>Displaying info for: {data.date}</p>
                    <p>NASA's data for today is a special <strong>{data.media_type}</strong> format without a direct link in the API.</p>
                    <p>Check the sidebar for more details!</p>
                </div>
            ) : isDirectVideo ? (
                <video
                    src={mediaUrl}
                    className="bgImage"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            ) : isVideo ? (
                <iframe
                    title={data.title}
                    src={data.url}
                    className="bgImage"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ) : (
                <img
                    src={mediaUrl}
                    alt={data.title || 'bg-img'}
                    className="bgImage"
                />
            )}
        </div>
    )
}