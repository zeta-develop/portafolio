
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
  language: string;
  stargazers_count: number;
  fork: boolean;
}

interface GitHubUser {
  name: string;
  avatar_url: string;
  bio: string;
  html_url: string;
  public_repos: number;
}

const GITHUB_USERNAME = 'zeta-develop'; // Your GitHub username

// Fetch GitHub user data in real-time
const fetchGitHubUser = async (): Promise<GitHubUser> => {
  const timestamp = new Date().getTime(); // Add timestamp to prevent caching
  const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}?t=${timestamp}`);
  
  if (!response.ok) {
    throw new Error('Error fetching GitHub user data');
  }
  
  return response.json();
};

// Fetch GitHub repositories in real-time
const fetchRepositories = async (): Promise<Repository[]> => {
  const timestamp = new Date().getTime(); // Add timestamp to prevent caching
  const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100&t=${timestamp}`);
  
  if (!response.ok) {
    throw new Error('Error fetching repositories');
  }
  
  const repos = await response.json();
  
  // Filter out forked repositories and sort by stars
  return repos
    .filter((repo: Repository) => !repo.fork)
    .sort((a: Repository, b: Repository) => b.stargazers_count - a.stargazers_count)
    .slice(0, 8); // Get top 8 repositories
};

export function useGitHubUser() {
  return useQuery({
    queryKey: ['githubUser'],
    queryFn: fetchGitHubUser,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: true, // Refetch when window regains focus
  });
}

export function useGitHubRepositories() {
  return useQuery({
    queryKey: ['githubRepos'],
    queryFn: fetchRepositories,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: true, // Refetch when window regains focus
  });
}

// Map GitHub language to a color
export function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    JavaScript: 'bg-yellow-400',
    TypeScript: 'bg-blue-600',
    HTML: 'bg-orange-600',
    CSS: 'bg-blue-400',
    Python: 'bg-green-500',
    Java: 'bg-red-500',
    'C#': 'bg-purple-600',
    PHP: 'bg-indigo-400',
    Go: 'bg-blue-300',
    Ruby: 'bg-red-600',
    Swift: 'bg-orange-500',
    Kotlin: 'bg-purple-500',
    Rust: 'bg-amber-600',
    Dart: 'bg-cyan-500',
    // Add more languages as needed
  };

  return colors[language] || 'bg-gray-500';
}
