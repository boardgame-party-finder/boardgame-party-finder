package main

type User struct {
	TbN       string `json:"TbN"`
	PK        string `json:"PK"`
	FirstName string `json:"FirstName"`
	LastName  string `json:"LastName"`
	// GameType  string `json:"gametype"`
	// Name      string `json:"name"`
	// Max       int64  `json:"max"`
	// Min       int64  `json:"min"`
}

type Lobby struct {
	TbN      string `json:"TbN"`
	PK       string `json:"PK"`
	GameType string `json:"GameType"`
	Name     string `json:"Name"`
	Max      int64  `json:"Max"`
	Min      int64  `json:"Min"`
}

type RoomUser struct {
	ID   string `json:"id"`
	Name string `json:"name"`
}
