import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% - 32px);
  padding: 16px;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 720px;
  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
    :first-child {
      margin-top: 16px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    :not(:first-child) {
      margin-left: 8px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
  & > * {
    :not(:first-child) {
      margin-left: 8px;
    }
  }
`;

export const BankInfoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 24px;
  background: skyblue;
  cursor: pointer;
`;

export const ListItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% - 32px);
  padding: 16px;
  border: 1px solid grey;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  :hover {
    background: lightgrey;
  }
  .fa-lock {
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
  }
`;

export const TitleText = styled.p`
  margin-right: auto;
  font-size: 20px;
  font-weight: 500;
`;

export const WrtDtText = styled.p`
  margin-left: auto;
`;

export const StyledButton = styled.button`
  width: fit-content;
  padding: 8px 16px;
  margin: 0 0 0 0;
  border-width: 1px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
`;

export const StyledTextarea = styled.textarea`
  justify-content: center;
  width: calc(100% - 32px);
  padding: 28px 16px;
  margin: 16px auto;
  border: 1px solid grey;
  border-radius: 8px;
  background: white;
  font-size: 20px;
  font-weight: 500;
`;

export const PostViewButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BackContainer = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  position: fixed;
  align-items: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  ${(props) => props.edit && "width: 80vw;"};
  max-width: 70%;
  padding: 16px;
  border: 1px solid grey;
  border-radius: 8px;
  background: white;
  font-size: 20px;
  line-height: 32px;
  white-space: pre-wrap;
`;
