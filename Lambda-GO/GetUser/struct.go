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
	TbN      string `json:"tbn"`
	PK       string `json:"pk"`
	GameType string `json:"gametype"`
	Name     string `json:"name"`
	Max      int64  `json:"max"`
	Min      int64  `json:"min"`
}
