import axiosInstance from "../api/AxiosInstance";
import api from "./client";

// 불러오기
export async function fetchCommunities() {
  const { data } = await axiosInstance.get("/api/communities");
  return data?.data?.communityInfoResDtos ?? [];
}

// 커뮤니티 생성(글쓰기)
export async function createCommunity({title, content, address}) {
    const { data } = await axiosInstance.post("/api/communities", {
    title,
    content,
    address,
  });
  return data?.data ?? data;
}

// 커뮤니티 상세 조회
export async function getCommunity(id) {
  const res = await api.get(`/api/communities/${id}`);
  return res.data?.data;
}


// 커뮤니티 수정
export async function updateCommunity({id, title, content, address}) {
    const { data } = await axiosInstance.put(`/api/communities/${id}`, {
        title,
        content,
        address,
    });
    return data?.data ?? data;
}


// 삭제
export async function deleteCommunity(id) {
  const { data } = await axiosInstance.delete(`/api/communities/${id}`);
  return data?.data ?? data;
}