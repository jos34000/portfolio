"use server"

export const logToServer = async (data: any) => {
  try {
    console.log("--------------------------------")
    console.log(`Server log : `)
    console.log("➡️")
    console.log(data)
    console.log("--------------------------------")
  } catch (err) {
    console.error("Log failed:", err)
  }
}
