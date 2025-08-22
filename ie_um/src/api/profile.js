import api from "./client";

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