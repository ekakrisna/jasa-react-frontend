import styled from "styled-components";
import media from "../../../styles/_mediaQueries";
import { colors } from "../../../styles/_variables";
import { LocationIcon } from "../../icon";

const Wrapper = styled.div`
  height: 32px;
  background: ${colors.gray};
  font-size: 12px;
  font-weight: 600;
  color: #545454;
`;

const Content = styled.div`
  display: flex;
  align-items: center;

  padding-top: 8px;

  svg {
    margin-right: 8px;
  }
`;

const NavigationBar = styled.div`
  display: none;
  margin-left: auto;
  p {
    margin-right: 16px;
    margin-bottom: 0;
  }

  @media ${media.sm} {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export default function topHeader() {
  return (
    <Wrapper>
      <div className="px-4">
        <Content>
          <div>
            <LocationIcon />
            Location: Bali
          </div>
          <NavigationBar>
            <p>Tentang JAKI</p>
            <p>Hubungi JAKI</p>
            <p>Promo</p>
            <p>FAQ</p>
          </NavigationBar>
        </Content>
      </div>
    </Wrapper>
  );
}
