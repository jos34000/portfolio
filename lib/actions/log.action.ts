"use server"

export const logToServer = async (data: any) => {
  console.log("--------------------------------")
  console.log(`Server log : `)
  console.log("➡️")
  console.log(data)
  console.log("--------------------------------")
}
