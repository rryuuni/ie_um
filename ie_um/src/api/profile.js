import axiosInstance from "./AxiosInstance";

// GET
export async function fetchMyProfile() {
    const {data} = await api.get('/api/members');
    return data.data;
}

// PUT
export async function updateMyProfile({nickname, age, gender}) {
    const payload = {
        nickName: nickname.trim(),
        gender,
        age,
    };

    const { data } = await api.put("/api/members", payload);
    return data.data;
}

// PUT: 프로필 이미지 업데이트
export async function updateProfileImage(file) {
  const formData = new FormData();
  formData.append("file", file);

  const { data } = await axiosInstance.put("/api/members/image", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data.data;
}