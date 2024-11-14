# Reflexion zur CI/CD-Pipeline

## Zusammenfassung

Die CI/CD-Pipeline für die `Shopping-List`-App wurde in GitHub Actions erstellt, um automatisches Linting, Testing und eine simulierte Deployment-Phase zu integrieren.

## Herausforderungen

Einige Herausforderungen waren:

- **Abhängigkeiten**: Jeder Job benötigt eine separate Installation der Abhängigkeiten, was die Pipeline verlangsamt.
- **Fehlerdiagnose**: Wir mussten `babel` installieren und React downgraden, um einen Fehler zu beheben. Dies erforderte Zeit und Analyse, um das Problem zu identifizieren und zu lösen.
Babel hat aber nicht funktioniert und wir mussten alles nochmals neu machen mit next.js.
**Merci Next Doku
- **Testkonfiguration**: Die Einrichtung zuverlässiger Tests in der CI-Umgebung erforderte zusätzliche Konfiguration.

## Fazit

Die Pipeline ermöglicht zuverlässige Automatisierung und Qualitätssicherung.
