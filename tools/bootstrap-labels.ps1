param(
  [Parameter(Mandatory = $true)]
  [string]$Owner,
  [Parameter(Mandatory = $true)]
  [string]$Repo
)

$requiredLabels = @(
  @{ name = "pm-task"; color = "1d76db"; description = "Planning tasks for PM agent" },
  @{ name = "dev-task"; color = "0e8a16"; description = "Implementation tasks for Dev agent" },
  @{ name = "qa-task"; color = "5319e7"; description = "Validation tasks for QA agent" },
  @{ name = "needs-triage"; color = "fbca04"; description = "Issue title prefix missing PM/DEV/QA marker" }
)

foreach ($label in $requiredLabels) {
  gh label create $label.name --repo "$Owner/$Repo" --color $label.color --description $label.description --force
}

Write-Output "Labels bootstrapped for $Owner/$Repo"
