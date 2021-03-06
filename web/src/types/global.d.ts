declare var VUE_BASE: any; // eslint-disable-line

declare interface User {
  login?: string;
  email?: string;
  avatar?: string;
}

declare interface Token {
  id: number;
  name: string;
  createdAt: string;
}

declare interface Repository {
  URL: string;
  SCM: string;
  ReportID?: string;
  NameSpace: string;
  Name: string;
  Branch: string;
}

declare interface RepositorySetting {
  filters?: string[];
  mergePR?: boolean;
  protected?: boolean;
}

declare interface Commit {
  sha: string;
  committer: string;
  committerAvatar: string;
  message: string;
}

declare interface StatementHit {
  LineNumber: number;
  Hits: number;
}

declare interface SourceFile {
  Name: string;
  StatementCoverage: number;
  StatementHits: StatementHit[];
}

declare interface Coverage {
  files?: SourceFile[];
  type: string;
  statementCoverage: number | 0;
}

declare interface Report {
  reference?: string;
  commit: string;
  coverages: Coverage[];
  reportID: string;
  files?: string[];
  createdAt?: string;
}
