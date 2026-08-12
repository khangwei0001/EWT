/**
 * The four-step engagement model — drawn from the brief's own sentence
 * (docs/05 §02). `support` is the Home one-liner; `expanded` is the About
 * version. Every line is a method statement: none claims a past project.
 */
export type ProcessStep = {
  index: string;
  title: string;
  support: string;
  expanded: string;
};

export const PROCESS: ProcessStep[] = [
  {
    index: '01',
    title: 'Understand the requirement',
    support:
      'We work with your team to understand the operational and technology requirement in its actual context.',
    expanded:
      'Discovery happens in the operational context, with the people who will use the system. We establish what the requirement actually is before any solution is discussed.',
  },
  {
    index: '02',
    title: 'Define the appropriate solution',
    support:
      'We define a solution that fits the organisation’s needs, constraints and existing environment.',
    expanded:
      'A solution is defined against the constraints that exist — the current environment, the budget, and what the organisation can realistically operate once we hand it over.',
  },
  {
    index: '03',
    title: 'Plan the engagement',
    support:
      'We structure the project — scope, sequence, responsibilities and delivery approach.',
    expanded:
      'Scope, sequence, responsibilities and the delivery approach are agreed before build begins. Both sides know what is being delivered, in what order, and by whom.',
  },
  {
    index: '04',
    title: 'Coordinate implementation',
    support:
      'We coordinate the expertise required to implement, test and put the solution into operation.',
    expanded:
      'We coordinate implementation, testing, deployment and handover — and stay available under an agreed support arrangement once the system is in operation.',
  },
];
