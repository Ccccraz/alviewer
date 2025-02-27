import { http } from "./http"

async function listNotes() {
  try {
    const response = await http.get('/notes')
    // console.log(response.data.id)
  } catch (error) {
    console.error(error)
  }
}