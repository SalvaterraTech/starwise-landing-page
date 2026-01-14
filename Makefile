.PHONY: help install dev build start lint

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Targets:'
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies using npm
	npm install

dev: ## Start the development server
	npm run dev

build: ## Build the application for production
	npm run build

start: ## Start the production server
	npm run start

lint: ## Run linting
	npm run lint
