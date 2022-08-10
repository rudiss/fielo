import { Avatar, Divider, Skeleton } from "antd";
import React from "react";
import { IUser } from "../../services/user";

import { BalanceContainer, Container } from "./styles";

type UserProfileProps = {
  data: IUser;
  loading: boolean;
};
const UserProfile: React.FC<UserProfileProps> = ({
  data: { image, name, balance }, loading
}) => {
  return (
    <Container id="userProfile">
      <Skeleton loading={loading} active avatar paragraph={{ rows: 5 }}>
        <Avatar
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          src={image}
        />
        <div>
          <h1>{name}</h1>
          <p>
            Sales Incetive program
            <br />
            Contributor
          </p>
        </div>
        <Divider />
        <BalanceContainer>
          <div>
            {balance?.points} <br /> <span>Points</span>
          </div>
          <div>
            {balance?.miles}
            <br />
            <span>Miles</span>
          </div>
          <div>
            <span>$</span>{balance?.currency.toFixed(0)}
            <br />
            <span>Currency</span>
          </div>
        </BalanceContainer>
          <Divider />
      </Skeleton>
    </Container>
  );
};

export default UserProfile;
