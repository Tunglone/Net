import styled from 'styled-components/macro'

// Nghiã là DOM ảo có tên là X sẽ render ra 1 thẻ y với các style đi kèm

export const Inner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: ${({ direction }) => direction};
    justify-content: space-between;
    max-width: 1100px;
    margin: auto;
    width: 100%;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Item = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    color: white;
    overflow: hidden;
`;
export const Pane = styled.div`
    width: 50%;    
`;
export const Title = styled.h1`
    font-size: 50px;
    line-height: 1.1;
    margin-bottom: 8px;

    @media (max-width: 600px){
        font-size: 35px;
    }
`;
export const SubTitle = styled.h2`
    font-size: 26px;
    font-weight: normal;
    line-height: normal;

    @media (max-width: 600px){
        font-size: 18px;
    }
`;
export const Image = styled.img``;

export const Container = styled.div`
    @media (max-width: 1000px){
        ${Item}: last-of-type h2 {
            margin-bottom: 50px;
        }
    }
`;