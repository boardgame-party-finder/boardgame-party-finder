package main

type User struct {
	TbN       string `json:"tbn"`
	PK        string `json:"pk"`
	FirstName string `json:"firstname"`
	LastName  string `json:"lastname"`
}

type Lobby struct {
	TbN      string `json:"tbn"`
	PK       string `json:"pk"`
	GameType string `json:"gametype"`
	Name     string `json:"name"`
	Max      int64  `json:"maxU"`
	Min      int64  `json:"min"`
}

type JoinInfo struct {
	PK   string `json:"PK"`
	Name string `json:"Name"`
}

type RoomKey struct {
	TbN string `json:"TbN"`
	PK  string `json:"PK"`
}

type UserKey struct {
	TbN string `json:"TbN"`
	PK  string `json:"PK"`
}

type UserInfo struct {
	ID    string `json:"id"`
	Name  string `json:"name"`
	Ready bool   `json:"ready"`
}
