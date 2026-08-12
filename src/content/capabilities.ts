/**
 * The eight capability categories — docs/07-page-capabilities.md §3.
 * Titles and summary lines are verbatim from the brief. The four fields per
 * card are DRAFT, written in capability/method tense with no implied track
 * record (docs/01 §7).
 */
export type CapabilityCategory = {
  slug: string;
  title: string;
  summary: string;
  whatItIs: string;
  whenUseful: string;
  typicalScope: string;
  ewtInvolvement: string;
  icon: string;
};

export const CAPABILITIES: CapabilityCategory[] = [
  {
    slug: 'technology-consultancy-advisory',
    title: 'Technology Consultancy & Advisory',
    summary:
      'Requirement discovery, technology assessment, solution planning and project scoping.',
    whatItIs:
      'Structured advisory work that turns an unclear technology need into a defined, scoped and implementable project.',
    whenUseful:
      'When an organisation knows something needs to change but has not yet defined the requirement, the solution or the scope of work.',
    typicalScope:
      'Requirement discovery sessions, assessment of the current technology environment, options analysis, recommended solution direction, indicative delivery plan and project scope documentation.',
    ewtInvolvement:
      'EWT leads discovery and assessment, prepares the recommendation and scope, and remains available to structure the resulting implementation.',
    icon: 'clipboard-list',
  },
  {
    slug: 'digital-transformation',
    title: 'Digital Transformation',
    summary: 'Modernising manual or fragmented processes through appropriate technology.',
    whatItIs:
      'Projects that move manual, paper-based or fragmented ways of working onto appropriate digital systems.',
    whenUseful:
      'When work is spread across spreadsheets, forms, email and disconnected tools, and the organisation needs a single, reliable way of operating.',
    typicalScope:
      'Current-state process review, target process design, selection or design of supporting systems, phased rollout, user enablement and post-rollout review.',
    ewtInvolvement:
      'EWT structures the transformation into deliverable phases, defines the target state with the organisation, and coordinates delivery and adoption.',
    icon: 'arrow-right-left',
  },
  {
    slug: 'enterprise-custom-systems',
    title: 'Enterprise & Custom Systems',
    summary: 'Tailored internal systems, portals, workflow platforms and operational tools.',
    whatItIs:
      'Systems built or configured specifically for how an organisation actually operates, where standard off-the-shelf software does not fit.',
    whenUseful:
      'When existing processes are too specific for packaged software, or when several internal tools need to be replaced by one operational system.',
    typicalScope:
      'Functional requirements, system and data design, build or configuration, user access and roles, testing, migration from existing tools, and handover.',
    ewtInvolvement:
      'EWT defines the requirement with the organisation, structures the build, coordinates the technical expertise required, and manages delivery through to operation.',
    icon: 'building-2',
  },
  {
    slug: 'systems-integration',
    title: 'Systems Integration',
    summary: 'Connecting existing platforms, data sources, APIs and operational systems.',
    whatItIs:
      'Work that makes existing systems operate together, so information moves between them reliably instead of being re-entered or reconciled manually.',
    whenUseful:
      'When departments run separate systems, when the same data is maintained in more than one place, or when a new system must work alongside established platforms.',
    typicalScope:
      'Integration assessment, interface and data mapping, API or file-based integration design, build and testing, error handling, monitoring and documentation.',
    ewtInvolvement:
      'EWT assesses the integration points, designs the approach, coordinates implementation with the relevant system owners, and validates the result in operation.',
    icon: 'network',
  },
  {
    slug: 'automation-process-improvement',
    title: 'Automation & Process Improvement',
    summary: 'Reducing repetitive work and improving operational visibility.',
    whatItIs:
      'Projects that remove repetitive manual steps from a process and make its status visible to the people accountable for it.',
    whenUseful:
      'When staff time is spent on routine data handling, approvals move slowly, or management cannot see where work currently stands.',
    typicalScope:
      'Process mapping, identification of automation opportunities, workflow and approval design, implementation of automated steps, exception handling and operational reporting.',
    ewtInvolvement:
      'EWT maps the process with the operational team, defines what should be automated and what should stay manual, and delivers and validates the change.',
    icon: 'workflow',
  },
  {
    slug: 'data-management-dashboards',
    title: 'Data & Management Dashboards',
    summary: 'Consolidating operational information into decision-support interfaces.',
    whatItIs:
      'Bringing operational data from multiple sources into consolidated views that management can use to make decisions.',
    whenUseful:
      'When reporting is assembled manually each period, when figures differ between departments, or when leadership needs a current operational picture.',
    typicalScope:
      'Data source review, definition of measures and reporting logic, consolidation approach, dashboard design, access control, refresh arrangements and handover to the reporting owner.',
    ewtInvolvement:
      'EWT defines the reporting requirement with decision-makers, structures the data consolidation, and delivers dashboards designed around how the information is actually used.',
    icon: 'bar-chart-3',
  },
  {
    slug: 'corporate-digital-platforms',
    title: 'Corporate Digital Platforms',
    summary:
      'Web-based platforms and digital touchpoints designed around organisational requirements.',
    whatItIs:
      'Web-based platforms and digital touchpoints — corporate, internal or stakeholder-facing — designed around an organisation’s requirements and standards.',
    whenUseful:
      'When an organisation needs a professional, reliable and maintainable digital presence or platform that reflects how it is expected to operate.',
    typicalScope:
      'Requirement and audience definition, information architecture, interface design, build, content structure, accessibility and performance standards, deployment and handover.',
    ewtInvolvement:
      'EWT structures the platform around the organisational requirement, coordinates design and build, and delivers it to an agreed standard with a defined support arrangement.',
    icon: 'globe',
  },
  {
    slug: 'technology-implementation-project-support',
    title: 'Technology Implementation & Project Support',
    summary: 'Coordinating implementation, testing, deployment and ongoing support.',
    whatItIs:
      'Coordination of the implementation itself — putting a defined solution into operation and keeping it supported afterwards.',
    whenUseful:
      'When a solution has been decided but the organisation needs a single party to coordinate implementation, testing, deployment and the transition into operation.',
    typicalScope:
      'Implementation planning, coordination of technical and vendor resources, testing and acceptance, deployment, user handover, documentation and an agreed support arrangement.',
    ewtInvolvement:
      'EWT acts as the coordinating party through implementation and handover, and continues under an agreed support arrangement after go-live.',
    icon: 'shield-check',
  },
];

export const CAPABILITY_FIELD_LABELS = {
  whatItIs: 'What it is',
  whenUseful: 'When it is useful',
  typicalScope: 'Typical project scope',
  ewtInvolvement: 'Expected EWT involvement',
} as const;
