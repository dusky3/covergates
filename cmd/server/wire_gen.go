// Code generated by Wire. DO NOT EDIT.

//go:generate wire
//+build !wireinject

package main

import (
	"github.com/code-devel-cover/CodeCover/config"
)

// Injectors from wire.go:

func InitializeApplication(config2 *config.Config) (application, error) {
	loginMiddleware := provideLogin(config2)
	routers := provideRouter(loginMiddleware)
	mainApplication := newApplication(routers)
	return mainApplication, nil
}