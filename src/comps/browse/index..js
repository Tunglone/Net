import { Search } from './style'

function Browse({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Browse.Search = function Browse_Search({ children, ...restProps }) {
    return (
        <Search>
            <input placeholder="Tìm kiếm" />
            <i className="fa fa-search" aria-hidden="true" />
        </Search>
    )
}