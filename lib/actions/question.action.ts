"use server";

import { connectToDatabase } from "@/lib/mongoose";

export async function createQuestion(params: any) {
  try {
    connectToDatabase();
  } catch (error) {}
}
