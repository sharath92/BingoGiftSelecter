import { FaPeriscope, FaTag, FaTags, FaUserTag } from "react-icons/fa"

const Price = (props) => {
    return (
        <div>
            <p><strong>{props.label}</strong> {props.value} <FaTags color='red'  /></p>
        </div>
    )
}

export default Price
