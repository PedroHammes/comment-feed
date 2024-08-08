export default function Post({ email, date, comment }) {
    return (
        <div>
            <p>{email} | <span>{date}</span>    </p>
            <p>{comment}</p>
        </div>
    )
}