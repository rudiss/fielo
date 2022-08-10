import React from "react";
import { Avatar, List, Skeleton } from "antd";
import { Container } from "./styles";
import { DateTime } from "luxon";
import { IUserActivity } from "../../services/fielo";

type UserActivityFeedProps = {
  data: IUserActivity[];
  loading: boolean
};

const UserActivityFeed: React.FC<UserActivityFeedProps> = ({ data, loading }) => {
  return (
    <Container>
      <h2>Activity Feed</h2>
      <p>Show Filters</p>
      <Skeleton loading={loading} active avatar paragraph={{ rows: 10 }}>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={({ id, description, date }) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar size="small" src={`https://robohash.org/${id}.png`} />}
                title={ DateTime.fromISO(new Date(date).toISOString()).toRelative()}
                description={description}
              />
            </List.Item>
          )}
        />
      </Skeleton>
    </Container>
  );
};

export default UserActivityFeed;
