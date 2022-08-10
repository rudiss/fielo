import { Avatar, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import {
  authApi,
  getUsers,
  getUserById,
  getUserActivities,
  IUser,
  IUsers,
  IUserActivities,
  IUserActivity,
} from "../../services/fielo";
import UserActivityFeed from "../UserActivityFeed";
import UserProfile from "../UserProfile";
import { Wrapper, Container, Content, ListHeader, ListContent } from "./styles";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<IUsers | []>([]);
  const [activities, setActivities] = useState<IUserActivities | []>([]);
  const [user, setUser] = useState<IUser>();
  const [authToken, setAuthToken] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingUserDetails, setLoadingUserDetails] = useState(true);

  const getUsersList = async (): Promise<void> => {
    try {
      const { auth, token } = await authApi();
      if (auth) {
        setAuthToken(token);
        const userList = await getUsers(token);
        setUsers(userList);
      }
      setLoading(false);
    } catch (error) {
      alert(error);
      console.error(error);
      setLoading(false);
    }

  };

  const getUser = async (id: string): Promise<void> => {
    try {
      const user = await getUserById(authToken, id);
      setUser(user);
    } catch (error) {
      console.error(error);
      alert("Error getting user");
    }
  };

  const getUserActivity = async (id: string): Promise<void> => {
    try {
      const userActivityFeed = await getUserActivities(authToken, id);
      setActivities(userActivityFeed);
    } catch (error) {
      console.error(error);
      alert("Error getting user activity");
    }
  }

  const handleUserDetails = async (id: string): Promise<void> => {
    setLoadingUserDetails(true);
    try {
      await getUser(id);
      await getUserActivity(id);
      setLoadingUserDetails(false);
    } catch (error) {
      alert("Error getting user details");
      console.error(error);
      setLoadingUserDetails(false);
    }
  };

  useEffect(() => {
    getUsersList();
  }, []);

  return (
    <Wrapper>
      <Container>
        <ListHeader>
          <span>Pos.</span>
          <span>Member</span>
          <span>Points</span>
        </ListHeader>
        <Content>
          <Skeleton loading={loading} active avatar paragraph={{ rows: 10 }}>
            {(users as IUser[]).map(({ id, image, name, balance: { points } }: IUser, index: number) => (
              <ListContent
                to="userProfile"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500} key={id} onClick={() => handleUserDetails(id)}>
                <div>{index + 1}</div>
                <div>
                  <Avatar src={image} /> {name}
                </div>
                <div>{points}</div>
              </ListContent>
            ))}
          </Skeleton>
        </Content>
      </Container>
      {user && <UserProfile data={user} loading={loadingUserDetails}  />}
      {user && <UserActivityFeed data={activities as IUserActivity[]} loading={loadingUserDetails}/>}
    </Wrapper>
  );
};

export default UserList;
