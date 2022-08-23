import styled from "styled-components";

export const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 720px;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  aligh-items: flex-start;
  justify-content: center;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export const ListItemWrapper = styled.div`
  width: calc(100%-32px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: pointer;
  background: white;
  :hover {
    background: lightgrey;
  }
`;

export const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

export const StyledButton = styled.button`
  padding: 8px 16px;
  margin-right: 16px;
  font-size: 16px;
  border-width: 1px;
  border-radius: 8px;
  cursor: pointer;
`;

export const StyledTextarea = styled.textarea`
  width: calc(100% - 32px);
  ${(props) => props.height && `height:${props.height}px;`}
  padding:16px;
  font-size: 16px;
  line-height: 20px;
`;
