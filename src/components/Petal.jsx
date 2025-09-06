export default function Petal({ className, style }) {
    return (
        <img
        src="/images/petal.png"
        alt="petal"
        className={`absolute w-32 h-32 ${className}`}
        style={style}
        />
    );
}

