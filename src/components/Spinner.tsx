import {FC} from 'react'
import {TailSpin} from 'react-loader-spinner'

const Spinner: FC = () => {
    return (
        <TailSpin
            height="80"
            width="80"
            color="blue"
            ariaLabel="three-dots-loading"
        />
    )
}

export default Spinner