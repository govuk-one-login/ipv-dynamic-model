Identity Proving Dynamic Model
==============================

A web tool that produces a visual representation of identity proving services
and models the likely impact to users based on simulated changes to different
parts of the system

Goals

- [ ] Model traffic patterns, load, and failure points
- [ ] Describe changes in successrates caused by changes in the system
- [ ] Measure the user impact of outages
- [ ] Know whats in the system
  - We should be able to spot gaps, and plan to plug those gaps

CRI Data Structure

```
name: string,               # Nameof the CRI
description: string,
throughput: integer,        # Represents requests per second
spikeThroughput: integer,   # Request per second
spikeLength: integer,       # Time in ms
strengthScore: integer,     # Maximum possible strength and validation score
verificationScore: integer, # Maximum possible verification score
fraudScore: integer,        # Maximum possible fraud score
activityCheck: boolean?,    # Not sure how we represent this
possibleCIs: CI[],          # A list of possible CI codes
mitigatesCIs: CI[],         # What CIs could be mitigated here
successRate: float,         # What percentage of people can succeed here (1.0 being 100%)
userRequirements: UserRequirement[], # A list of things the user will need
claimsRequired: Claim[],    # What do we already need to know about a user
claimsProduced: Claim[],    # What does this tell us about a user
comments: string,           # Free text field for any other notes
errors: Error[],            # Potential errors produced by the system
```

Claim Structure

```
name: string,
description: string,
attributes: Attribute[],
strengthScore: integer,     # Maximum possible strength and validation score
verificationScore: integer, # Maximum possible verification score
fraudScore: integer,        # Maximum possible fraud score
activityCheck: boolean?,    # Not sure how we represent this
```



