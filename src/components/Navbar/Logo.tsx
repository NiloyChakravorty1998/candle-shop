import { GiCandlebright } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'

interface StyleProps {
    styles: string
}

const Logo = ({ styles }: StyleProps) => {
    const navigate = useNavigate();
    
    return (
        <div className={`flex items-center ${styles}`} onClick={ () => navigate('/')}>
            <GiCandlebright />
            <h1>
                Candleaf
            </h1>
        </div>
    )
}

export default Logo;