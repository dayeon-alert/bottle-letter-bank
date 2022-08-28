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
  display: flex;
  flex-direction: column;
  aligh-items: flex-start;
  justify-content: center;
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
  justify-content: center;
  width: 100%;
  max-width: 720px;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export const ListItemWrapper = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  cursor: pointer;
  background: white;
  :hover {
    background: lightgrey;
  }
  .fa-lock {
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
  }
`;

export const TitleText = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-right: auto;
`;

export const WrtDtText = styled.p`
  margin-left: auto;
`;

export const StyledButton = styled.button`
  padding: 8px 16px;
  margin-left: auto;
  margin-bottom: 16px;
  font-size: 16px;
  border-width: 1px;
  border-radius: 8px;
  cursor: pointer;
`;

export const StyledModalButton = styled.button`
  padding: 8px 16px;
  margin-left: 16px;
  margin-bottom: 16px;
  font-size: 16px;
  border-width: 1px;
  border-radius: 8px;
  cursor: pointer;
`;

export const StyledTextarea = styled.textarea`
  width: calc(100% - 32px);
  padding: 28px 16px;
  justify-content: center;
  border: 1px solid grey;
  border-radius: 8px;
  background: white;
  font-size: 20px;
  font-weight: 500;
`;
