# DOCKER
docker-cleanup:
	@docker compose -f ./docker-compose.local.yml down -v

docker-start: docker-cleanup
	@docker compose -f ./docker-compose.local.yml up -d

docker-restart:
	@docker compose -f ./docker-compose.local.yml restart

docker-stop: docker-cleanup

# DEPLOYMENTS
.PHONY: deploy-dev
deploy-dev:
	bash scripts/deployments/deploy-dev.sh

.PHONY: deploy-qa
deploy-qa:
	bash scripts/deployments/deploy-qa.sh

.PHONY: deploy-prod
deploy-prod:
	bash scripts/deployments/deploy-prod.sh