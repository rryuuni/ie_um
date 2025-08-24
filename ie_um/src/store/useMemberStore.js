import { create } from "zustand";
import { fetchMyProfile, updateMyProfile } from "../api/profile";

export const AGE_MAP = { 10: "10대", 20: "20대", 30: "30대", 40: "40대 이상" };
export const LABEL_TO_AGE = { "10대": 10, "20대": 20, "30대": 30, "40대 이상": 40 };
export const GENDER_MAP = { FEMALE: "여자", MALE: "남자" };
export const LABEL_TO_GENDER = { 여자: "FEMALE", 남자: "MALE" };

// 전역스토어 생성 - 사용자 정보 저장
export const useMemberStore = create((set, get) => ({
  id: null,
  name: "",
  nickName: "",
  age: null,
  gender: "",

  // 사용자 정보 불러오기
  loadMe: async () => {
    const me = await fetchMyProfile();
    set({
      id: me?.id ?? null,
      name: me?.name ?? "",
      nickName: me?.nickName ?? "",
      age: me?.age ?? null,
      gender: me?.gender ?? "",
    });
  },

  // 회원 정보 수정
  saveProfile: async ({ nickName, ageLabel, genderLabel }) => {
    const res = await updateMyProfile({
      nickname: String(nickName || "").trim(),
      age: LABEL_TO_AGE[ageLabel],
      gender: LABEL_TO_GENDER[genderLabel],
    });
    set({
      nickName: res?.nickName ?? nickName,
      age: res?.age ?? LABEL_TO_AGE[ageLabel],
      gender: res?.gender ?? LABEL_TO_GENDER[genderLabel],
    });
  },
}));