import styled from 'styled-components'

const BlogStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        width: 75%;
        margin-bottom: 0;
    }
    .post-date {
        font-size: 1.1rem;
        width: 75%;
        margin: 0;
    }
    .post-body {
        font-size: 1.25rem;
        width: 50%;
    }
    .post-image {
        width: 80%;
    }

`

export default BlogStyle;
