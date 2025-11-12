/**
 * Get the badge styling class for evidence levels
 * Uses semantic tokens from the design system
 */
export const getEvidenceBadgeColor = (evidence: string) => {
  switch (evidence.toLowerCase()) {
    case "strong":
      return "bg-secondary text-secondary-foreground";
    case "moderate":
      return "bg-primary/70 text-primary-foreground";
    case "limited":
    case "emerging":
      return "bg-muted text-muted-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};
