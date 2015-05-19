#
# Binaries.
#

MOCHA = ./node_modules/.bin/mocha
ESLINT = ./node_modules/.bin/eslint

#
# Files.
#

SRCS = $(shell find lib -type f -name "*.js")
TESTS = $(shell find test -type f -name "*.test.js")

#
# Maintenance tasks.
#

# Install node dependencies.
node_modules:
	@npm install

# Remove all temporary files.
clean:
	@rm *.log
.PHONY: clean

# Remove all temporary files and vendor dependencies.
distclean: clean
	@rm -rf node_modules
.PHONY: distclean

#
# Testing tasks.
#

# Lint all files.
lint: node_modules
	@$(ESLINT) -- $(SRCS) $(TESTS)
.PHONY: lint

# Run tests.
test: node_modules lint
	@$(MOCHA) \
		--timeout 5s \
		--ui bdd \
		--reporter spec \
		$(TESTS)
.PHONY: test
