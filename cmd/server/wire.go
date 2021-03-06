//+build wireinject

package main

import (
	"github.com/covergates/covergates/config"
	"github.com/google/wire"
	"gorm.io/gorm"
)

func InitializeApplication(config *config.Config, db *gorm.DB) (application, error) {
	wire.Build(
		serviceSet,
		storeSet,
		routerSet,
		newApplication,
	)
	return application{}, nil
}
