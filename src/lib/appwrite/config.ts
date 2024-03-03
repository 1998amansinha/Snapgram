import { Client, Databases, Account, Storage, Avatars } from 'appwrite'

export const appwriteConfig = {
    projectId : import.meta.env.VITE_APPWRITE_PROJECT_ID,
    projectUrl : import.meta.env.VITE_APPWRITE_PROJECT_URL
}

export const client = new Client()

client
.setEndpoint(appwriteConfig.projectUrl)
.setProject(appwriteConfig.projectId)


export const database = new Databases(client)
export const account = new Account(client)
export const storage = new Storage(client)
export const avatars = new Avatars(client)