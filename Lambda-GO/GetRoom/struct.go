package main

type User struct {
	TbN       string `json:"tbn"`
	PK        string `json:"pk"`
	FirstName string `json:"firstname"`
	LastName  string `json:"lastname"`
	// GameType  string `json:"gametype"`
	// Name      string `json:"name"`
	// Max       int64  `json:"max"`
	// Min       int64  `json:"min"`
}

type Lobby struct {
	TbN      string        `json:"tbn"`
	PK       string        `json:"pk"`
	GameType string        `json:"gametype"`
	Name     string        `json:"name"`
	Max      int64         `json:"max"`
	Min      int64         `json:"min"`
	Location string        `json:"Location"`
	InUsers  []GetUserInfo `json:"inusers"`
}

type RoomUser struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}

type GetUserInfo struct {
	ID    string `json:"id"`
	Name  string `json:"name"`
	Ready bool   `json:"ready"`
}
