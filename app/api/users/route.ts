// http://localhost:3000/api/users

export async function GET(request: Request) {
  // Handel GET request for /api/users

  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Alan' },
  ]

  // Send the users as a response
  return new Response(JSON.stringify(users))
}

// Path: app/api/users/route.ts
