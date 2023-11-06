export interface Profile {
  user_id: string;
  nickname: string;
  bio: string;
  profile_pic: string;
}

export const initialProfileState: Profile = {
  user_id: '',
  nickname: '',
  bio: '',
  profile_pic: ''
};