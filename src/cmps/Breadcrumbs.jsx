import { useLocation, useSearchParams, Link } from 'react-router-dom'
import homeIcon from '../assets/img/home-icon.svg'
import { gigservice } from '../services/gig'

export function BreadCrumbs() {
    const location = useLocation()
    const [searchParams] = useSearchParams()

    const isInCategories = location.pathname.startsWith('/categories')
    const category = searchParams.get('category')
    const categoryTitle = category ? gigservice.getCategoryTitleFromPath(category) : null
    const isGigDetails = location.pathname.split('/').length === 3

    if (!isInCategories) return null

    return (
        <nav className="breadcrumbs flex align-center">
            <Link to="/" className="breadcrumb-link item">
                <img src={homeIcon} alt="home" />
            </Link>

            <span className="breadcrumb-separator">/</span>
            <Link to="/categories" className="breadcrumb-link item">
                Categories
            </Link>

            {isGigDetails && category && (
                <>
                    <span className="breadcrumb-separator">/</span>
                    <Link
                        to={`/categories?category=${category}`}
                        className="breadcrumb-link item"
                    >
                        {categoryTitle}
                    </Link>
                </>
            )}
        </nav>
    )
}
