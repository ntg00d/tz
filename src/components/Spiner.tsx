import {FC} from 'react'
import {TailSpin} from 'react-loader-spinner'

const Spiner: FC = () => {
    return (
        <TailSpin
            height="80"
            width="80"
            color="blue"
            ariaLabel="three-dots-loading"
        />
    )
}

export default Spiner